import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle, MessageCircle, Users } from "lucide-react";

export default function SpacePage () {
    return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
         <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="container p-4 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 px-16">
                        <div className="rounded-full bg-purple-600 p-2">
                            <Users className="h-6 w-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Space Hub</h1>
                            <p className="text-sm text-gray-300">Connect with fellow space members</p>
                        </div>
                    </div>
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-200 mx-16 text-base hover:bg-purple-300/20" >
                        <div
                            className="h-4 w-4 mr-2 rounded-full bg-green-500"
                        />
                        36 Online
                    </Badge>
                </div>
            </div>
         </div>

         <div className="container mx-auto px-4 py-6">
            <Tabs defaultValue="Members" className="w-full px-16" >
                <TabsList className="grid grid-cols-3 w-full h-full bg-white/10 mb-8 text-gray-400">
                    <TabsTrigger value="Members" className="data-[state=active]:bg-purple-600 text-xl py-4 rounded-l-md">
                        <Users className="h-6 w-6 mr-2" />
                        Members
                    </TabsTrigger>
                    <TabsTrigger value="Chat" className="data-[state=active]:bg-purple-600 py-4 text-xl ">
                        <MessageCircle className="h-6 w-6 mr-2" />
                        Chat
                    </TabsTrigger>
                    <TabsTrigger value="Doubts" className="data-[state=active]:bg-purple-600 text-xl py-4 rounded-r-md">
                        <HelpCircle className="h-6 w-6 mr-2" />
                        Doubts
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="Members">
                    <div className="mb-8">
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                            {/* Map users from here */}
                            <div className="group relative flex flex-col items-center rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105">
                                <div className="relative">
                                    <Avatar className="h-16 w-16 border-2 border-white/20" >
                                        <AvatarImage />
                                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-sm font-medium text-white truncate w-full">
                                        Utkarsh
                                    </p>
                                </div>
                            </div>
                            <div className="group relative flex flex-col items-center rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105">
                                <div className="relative">
                                    <Avatar className="h-16 w-16 border-2 border-white/20" >
                                        <AvatarImage />
                                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-sm font-medium text-white truncate w-full">
                                        Utkarsh
                                    </p>
                                </div>
                            </div>
                            <div className="group relative flex flex-col items-center rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105">
                                <div className="relative">
                                    <Avatar className="h-16 w-16 border-2 border-white/20" >
                                        <AvatarImage />
                                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-sm font-medium text-white truncate w-full">
                                        Utkarsh
                                    </p>
                                </div>
                            </div>
                            <div className="group relative flex flex-col items-center rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105">
                                <div className="relative">
                                    <Avatar className="h-16 w-16 border-2 border-white/20" >
                                        <AvatarImage />
                                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-sm font-medium text-white truncate w-full">
                                        Utkarsh
                                    </p>
                                </div>
                            </div>
                            <div className="group relative flex flex-col items-center rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105">
                                <div className="relative">
                                    <Avatar className="h-16 w-16 border-2 border-white/20" >
                                        <AvatarImage />
                                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-sm font-medium text-white truncate w-full">
                                        Utkarsh
                                    </p>
                                </div>
                            </div>
                            <div className="group relative flex flex-col items-center rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105">
                                <div className="relative">
                                    <Avatar className="h-16 w-16 border-2 border-white/20" >
                                        <AvatarImage />
                                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-sm font-medium text-white truncate w-full">
                                        Utkarsh
                                    </p>
                                </div>
                            </div>
                            <div className="group relative flex flex-col items-center rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105">
                                <div className="relative">
                                    <Avatar className="h-16 w-16 border-2 border-white/20" >
                                        <AvatarImage />
                                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-sm font-medium text-white truncate w-full">
                                        Utkarsh
                                    </p>
                                </div>
                            </div>
                            <div className="group relative flex flex-col items-center rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105">
                                <div className="relative">
                                    <Avatar className="h-16 w-16 border-2 border-white/20" >
                                        <AvatarImage />
                                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-sm font-medium text-white truncate w-full">
                                        Utkarsh
                                    </p>
                                </div>
                            </div>
                            <div className="group relative flex flex-col items-center rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105">
                                <div className="relative">
                                    <Avatar className="h-16 w-16 border-2 border-white/20" >
                                        <AvatarImage />
                                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-sm font-medium text-white truncate w-full">
                                        Utkarsh
                                    </p>
                                </div>
                            </div>
                            <div className="group relative flex flex-col items-center rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-105">
                                <div className="relative">
                                    <Avatar className="h-16 w-16 border-2 border-white/20" >
                                        <AvatarImage />
                                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-sm font-medium text-white truncate w-full">
                                        Utkarsh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="Chat">
                    <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                        <h2 className="text-xl font-semibold text-gray-200 mb-4">Recent Messages</h2>
                        {/* Map chats here */}
                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage />
                                        <AvatarFallback className="bg-purple-600 text-white text-xs">
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="font-medium text-white">Utkarsh</span>
                                            <span className="text-xs text-gray-300">5/2/2025</span>
                                        </div>
                                        <p className="text-gray-200 mt-4 text-xl">Hey there welcome to the space</p>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
         </div>
    </div>
}