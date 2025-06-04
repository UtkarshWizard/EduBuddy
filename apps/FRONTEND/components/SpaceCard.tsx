import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type props = {
    space: {
        id: number;
        name: string;
        subject: string;
        isLive: boolean;
        createdAt: Date;
        adminId: string;
        admin: {
            id: string;
            name: string;
            email?: string;
        };
        participants: {
            id: string;
            name: string;
        }[];
    }
}

export default function SpaceCard({space} : props) {
    return <div>
        <Card className="h-full transition-all duration-200 hover:shadow-lg">
            <CardContent className="pt-6">
                <Badge className="mb-4" variant="outline">
                    {space.subject}
                </Badge>
                <h3 className="text-xl font-semibold mb-4">{space.name}</h3>
                <div className="text-gray-600">
                    {space.participants.length} Participants
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                Created At - {new Date(space.createdAt).toLocaleString()}
                </span>
                <Link href={`/space/${space.id}`}>
                    <Button
                        className="bg-indigo-600 hover:bg-indigo-700"
                    >
                        Join
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    </div>
}