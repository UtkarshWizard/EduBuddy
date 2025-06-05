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
    // console.log(members)
    const {loading , socket , addListener} = useSocket();

    useEffect(() => {
    if (!socket || loading) return;

    const unsubscribe = addListener((data) => {
        if (data.type === "space_users") {
            console.log("data: ", data.users);
            setMembers(data.users);
        }
    });

    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
            type: "get_users_in_space",
            spaceId
        }));
    } else {
        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: "get_users_in_space",
                spaceId
            }));
        };
    }

    return unsubscribe;
}, [socket, loading, spaceId]);


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
