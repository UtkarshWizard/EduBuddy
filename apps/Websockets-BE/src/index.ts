import { WebSocket, WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { prismaClient } from "@repo/db/client";
import * as cookie from "cookie";

const wss = new WebSocketServer({ port : 8080 });

interface User {
    ws: WebSocket,
    userId: string,
    spaceId: number | null 
}

const Users : User[] = [];

function verifyUser( token : string ) : string | null {
    try {
        const decoded = jwt.verify(token , JWT_SECRET);

        if (typeof decoded === "string") {
            return null
        }

        if (!decoded || !decoded.userId) {
            return null
        }

        return decoded.userId
    } catch (e) {
        return null
    }
}

wss.on('connection' , function connection(ws , request) {

    const cookies = cookie.parse(request.headers.cookie || "");
    const token = cookies.token;

    if (!token) {
        ws.close(4001, "Missing token");
        return;
    }

    const userId = verifyUser(token);
    console.log(userId)
    if (!userId) return ws.close();

    const user: User = {ws , userId , spaceId: null};
    console.log(user)
    Users.push(user)
    console.log("Users: " , Users)

    ws.on('message' , async function message(data) {
        const parsedData = JSON.parse(data.toString());

        if (parsedData.type === "join_space") {
            const currentUser = Users.find( x => x.ws === ws);
            console.log(currentUser)

            if (!currentUser) {
                return
            }

            currentUser.spaceId = parsedData.spaceId

            Users.forEach((user) => {
                if (user.spaceId === parsedData.spaceId && user.ws !== ws) {
                    user.ws.send(JSON.stringify({
                        type: "user_joined",
                        userId
                    }))
                }
            })
        }

        if (parsedData.type === "leave_space") {
            const currentUser = Users.find(x => x.ws === ws);
            if (!currentUser) return;

            const oldSpaceId = currentUser.spaceId;
            currentUser.spaceId = null;

            Users.forEach((user) => {
                if (user.spaceId === oldSpaceId && user.ws !== ws) {
                    user.ws.send(JSON.stringify({
                       type: "user_left",
                       userId: currentUser.userId
                    }))
                }
            })
        }

        if (parsedData.type === "chat") {
            const spaceId = parsedData.spaceId;
            const message = parsedData.message;

            const chat = await prismaClient.chat.create({
                data: {
                    userId,
                    spaceId,
                    message 
                }
            });

            Users.forEach((user) => {
                if (user.spaceId === spaceId) {
                    user.ws.send(JSON.stringify({
                        type: "new_message",
                        userId,
                        message,
                        sentAt: chat.sentAt
                    }))
                }
            })
        }

        if (parsedData.type === "ask_doubt") {
            const spaceId = parsedData.spaceId;
            const doubt = parsedData.doubt;

            const newDoubt = await prismaClient.doubt.create({
                data: {
                    title: doubt,
                    askedById: userId,
                    askedSpaceId: spaceId
                }
            })

            Users.forEach((user) => {
                if( user.spaceId === spaceId ) {
                    user.ws.send(JSON.stringify({
                        type: "new_doubt",
                        newDoubt
                    }))
                }
            })
        }

        if (parsedData.type === "answer_doubt") {
            const doubtId = parsedData.doubtId;
            const answer = parsedData.answer;

            const updated = await prismaClient.doubt.update({
                where: {
                    id: doubtId
                } , 
                data: {
                    answer,
                    answeredById: userId
                }
            })

            Users.forEach((user) => {
                if (user.spaceId === updated.askedSpaceId) {
                    user.ws.send(JSON.stringify({
                        type: "doubt_answered",
                        doubtId,
                        answer,
                        answeredBy: updated.answeredById
                    }))
                }
            })
        }

        // if (parsedData.type === "get_users_in_space") {
        //     const spaceUsers = Users
        //         .filter(u => u.spaceId === parsedData.spaceId)
        //         .map(u => u.userId);

        //     ws.send(JSON.stringify({
        //         type: "space_users",
        //         users: spaceUsers
        //     }));
        // }

        // used db call here for now. needs to fix.

        if (parsedData.type === "get_users_in_space") {
            // Fetch participants from DB
            const participants = await prismaClient.spaceParticipant.findMany({
                where: { spaceId: Number(parsedData.spaceId) },
                include: { user: true } // if you want user details
            });

            const spaceUsers = participants.map(p => ({
                id: p.id,
                userId: p.userId,
                spaceId: p.spaceId,
                role: p.role,
                user: {
                id: p.user.id,
                name: p.user.name,
                avatarUrl: p.user.avatarUrl,
                }
            }));

            ws.send(JSON.stringify({
                type: "space_users",
                users: spaceUsers,
            }));
        }
    });

    ws.on('close' , () => {
        const index = Users.findIndex(x => x.ws === ws);
        if (index !== -1) {
            Users.splice(index , 1);
        }
    })
});