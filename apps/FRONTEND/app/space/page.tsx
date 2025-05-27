import { Badge } from "@/components/ui/badge";
import { Tabs } from "@/components/ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
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
                <TabsList className="grid grid-cols-3 w-full bg-white/10 mb-6">
                    <TabsTrigger value="Members" className="data-[state=active]:bg-purple-600 flex items-center justify-center p-4 rounded-l-md">
                        <Users className="h-4 w-4 mr-2" />
                        Members
                    </TabsTrigger>
                    <TabsTrigger value="Chat" className="data-[state=active]:bg-purple-600 flex items-center justify-center p-4">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat
                    </TabsTrigger>
                    <TabsTrigger value="Doubts" className="data-[state=active]:bg-purple-600 flex items-center justify-center p-4 rounded-r-md">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Doubts
                    </TabsTrigger>
                </TabsList>
            </Tabs>
         </div>
    </div>
}