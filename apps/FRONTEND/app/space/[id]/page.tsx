import Members from "@/components/Members";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, HelpCircle, MessageCircle, Send, Users } from "lucide-react";
import Link from "next/link";

export default async function SpacePage ({ params } : { params : {id: number}}) {
    const awaitedParams = await params;
    const spaceId = awaitedParams.id;
    console.log(spaceId)

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
                    <Link href="/" className="text-gray-300 text-lg font-light">
                        Home
                    </Link>
                    <Badge className="bg-purple-600/20 text-purple-200 mx-16 text-base hover:bg-purple-300/20" >
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
                    <TabsTrigger value="Members" className="data-[state=active]:bg-purple-600 text-lg py-2 rounded-l-md">
                        <Users className="h-6 w-6 mr-2" />
                        Members
                    </TabsTrigger>
                    <TabsTrigger value="Chat" className="data-[state=active]:bg-purple-600 py-2 text-lg ">
                        <MessageCircle className="h-6 w-6 mr-2" />
                        Chat
                    </TabsTrigger>
                    <TabsTrigger value="Doubts" className="data-[state=active]:bg-purple-600 text-lg py-2 rounded-r-md">
                        <HelpCircle className="h-6 w-6 mr-2" />
                        Doubts
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="Members">
                    <div className="mb-8">
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                            {/* Map users from here */}
                            <Members spaceId={spaceId} />
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
                        <div className="h-20" />
                    </div>
                    <div className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-sm px-16 py-4">
                        <div className="container mx-auto">
                            <div className="flex gap-3">
                                <Input
                                    placeholder="Send a message to the space..."
                                    className="flex-1 border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                                />
                                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="Doubts">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-semibold text-gray-200">Doubts</h2>
                            <Button className="bg-purple-600 hover:bg-purple-700">
                                <HelpCircle className="h-4 w-4 mr-2" />
                                Ask Doubt
                            </Button>
                        </div>
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                            {/* map doubts here */}
                            <Card className="bg-white/5 border-white/10">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <CardTitle className="text-lg text-white mb-2">
                                                How was tesla invented ?
                                            </CardTitle>
                                        </div>
                                        <div className="flex flex-col items-end gap-1 ml-4">
                                            <span className="text-xs text-gray-300 flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                5/2/2025
                                            </span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                     <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-6 w-6">
                                                <AvatarImage />
                                                <AvatarFallback className="bg-purple-600 text-white text-xs">
                                                    A
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="text-sm text-gray-300">Utkarsh</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Button
                                                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                                            >
                                                Answer
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
         </div>

    </div>
}