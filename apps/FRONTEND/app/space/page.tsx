import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

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
    </div>
}