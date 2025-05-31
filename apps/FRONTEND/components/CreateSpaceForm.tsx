"use client"

import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { useRouter } from "next/navigation";

export function CreateSpaceForm () {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [isPublic , setIsPublic] = useState(true);
    const [password , setPassword] = useState("");
    const [open , setOpen] = useState(false);
    const router = useRouter();

    const handleCreate = async () => {
        try {
            await axios.post(`${BACKEND_URL}/createSpace` , {
                name,
                subject,
                password,
                isPublic
            } , {withCredentials: true})

            setName("");
            setIsPublic(true)
            setSubject("")
            setPassword("")
            setOpen(false)
            router.push("/")
        } catch (e) {
            console.error('Failed to create a space' , e)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white w-[16vw]">
                        Create
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Create a New Space
                        </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label>
                                Space Name
                            </Label>
                            <Input 
                                id="name"
                                placeholder="Enter Space Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label>
                                Topic
                            </Label>
                            <Input
                                id="topic"
                                placeholder="Enter Space Topic"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label>
                                Set Visiblity
                            </Label>
                            <div className="grid grid-flow-col gap-2">
                                <Button className={`${isPublic && "bg-purple-600"}`} onClick={() => setIsPublic(true)}>
                                    Public
                                </Button>
                                <Button className={`${!isPublic && "bg-purple-600"}`} onClick={() => setIsPublic(false)}>
                                    Private
                                </Button>
                            </div>
                        </div>
                        {!isPublic && <div className="grid gap-2">
                            <Label>
                                Password
                            </Label>
                            <Input 
                                id="password"
                                placeholder="Enter Space Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>}
                    </div>
                    <div className="flex justify-end">
                        <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleCreate} disabled={!name || !subject} >
                            Create Space
                        </Button>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    )
}