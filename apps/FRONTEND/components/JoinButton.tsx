"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { useSocket } from "@/app/hooks/useSocket";

export default function JoinButton({ id }: { id: number }) {
  const router = useRouter();
  const { socket, loading } = useSocket();

  async function JoinSpace() {
    try {
      const res = await axios.get(`${BACKEND_URL}/space/${id}` , {withCredentials:true});
      console.log(res.data.space);

      if (res && res.data.space.isPublic) {
        await axios.post(`${BACKEND_URL}/joinspace/${id}`, {} , {withCredentials:true});

        socket?.send(
          JSON.stringify({
            type: "join_space",
            spaceId: id,
          })
        );

        router.push(`/space/${id}`);
      } else {
        // await axios.post(`${BACKEND_URL}/joinspace/${id}` , {} , {withCredentials:true});
        // router.push(`/space/${id}`); // send password here.
      }
    } catch (err) {
        console.error("error: ",err)
        alert("Failed to join space.");
    }   
  }
  return (
    <div>
      <Button onClick={JoinSpace} className="bg-indigo-600 hover:bg-indigo-700">
        Join
      </Button>
    </div>
  );
}
