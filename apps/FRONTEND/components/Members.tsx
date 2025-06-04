"use client"

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSocket } from "@/app/hooks/useSocket";

type props = {
    spaceId: number
}

interface Members {
    id: string,
    userId: string,
    spaceId: number,
    joinedAt: Date,
    role: Roles,
    user: {
        id: string,
        name: string,
        avatarUrl: string
    }
}

type Roles = "admin" | "member" | "moderator";

export default function Members({spaceId} : props) {

    const [members , setMembers] = useState<Members[]>([]);
    const {loading , socket} = useSocket();

    useEffect(() => {
        if (socket && !loading) {
            socket.onopen = () => {
                socket.send(JSON.stringify({
                    type: "get_users_in_space",
                    spaceId
                }))
            }

            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);

                if (data.type === "space_users") {
                    setMembers(data.users)
                }
            }

            socket.onerror = (err) => {
                console.error("WebSocket error:", err);
            };

            socket.onclose = () => {
                console.log("WebSocket closed");
            };

            return () => {
                socket.close();
            };
        }
    }, [socket , loading , spaceId])

    return (
    <>
        {members.map((member) => (
            <div key={member.id} className="group relative flex flex-col items-center rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105">
                <div className="relative">
                    <Avatar className="h-16 w-16 border-2 border-white/20">
                        <AvatarImage src={member.user.avatarUrl || ""} />
                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                            {member.user.name.charAt(0).toUpperCase() || "A"}
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className="mt-2 text-center">
                    <p className="text-sm font-medium text-white truncate w-full">
                        {member.user.name}
                    </p>
                </div>
            </div>
        ))}
    </>
    );
}
