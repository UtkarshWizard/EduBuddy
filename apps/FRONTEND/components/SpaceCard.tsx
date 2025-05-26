import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export default function SpaceCard() {
    return <div>
        <Card className="h-full transition-all duration-200 hover:shadow-lg">
            <CardContent className="pt-6">
                <Badge className="mb-4" variant="outline">
                    IIT-JEE
                </Badge>
                <h3 className="text-xl font-semibold mb-4">Space Title</h3>
                <div className="text-gray-600">
                    32 Students
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                Created At - xyz
                </span>
                <Button
                    className="bg-indigo-600 hover:bg-indigo-700"
                >
                 Join
                </Button>
            </CardFooter>
        </Card>
    </div>
}