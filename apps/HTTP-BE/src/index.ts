import express from "express";
import { prismaClient } from "@repo/db/client";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt from "jsonwebtoken";
import { SignInSchema, SignUpSchema, SpaceSchema } from "@repo/common/types";
import bcrypt from "bcrypt";
import { middleware } from "./middleware";

const app = express();
app.use(express.json());

app.post('/signup' , async (req , res) => {
    const parsedData = SignUpSchema.safeParse(req.body);

    if(!parsedData.success) {
        res.status(403).json({
            message: "Invalid Inputs"
        })
        return;
    }

    try {
        const existingUser = await prismaClient.user.findUnique({
            where: {email: parsedData.data.email}
        })

        if(existingUser) {
            res.status(409).json({
                message: "User Already Exist"
            });
            return;
        }

        const hashedPassword = await bcrypt.hash(parsedData.data.password , 10);

        const user = await prismaClient.user.create({
            data: {
                name: parsedData.data.name,
                email: parsedData.data.email,
                password: hashedPassword,
                avatarUrl: parsedData.data.avatarUrl
            }
        })

        try {
            const token = jwt.sign({ userId: user.id }, JWT_SECRET);

            res.json({
                message: "Account added successfully",
                userId: user.id,
                token
            });
        } catch (tokenError) {
            console.error("Token generation failed:", tokenError);
            res.status(500).json({
                message: "User created but token generation failed"
            });
        }
    } catch (e) {
        console.error("sign up error: " ,e)
       res.status(403).json({
            message: `Error adding the user`,
        })
    }
})

app.post('/signin' , async (req , res) => {
    const parsedData = SignInSchema.safeParse(req.body);

    if(!parsedData.success) {
        res.status(403).json({
            message: "Invalid Inputs"
        });
        return;
    }

    try {
        const user = await prismaClient.user.findUnique({
            where: {
                email: parsedData.data.email,
            }
        })

        if (!user || !(await bcrypt.compare(parsedData.data.password , user.password))) {
            res.status(403).json({
                message: "Invalid Email / Password"
            })
            return;
        }

        const token = jwt.sign({
            userId: user.id
        } , JWT_SECRET);

        res.json({
            token
        })

    } catch(e) {
        res.status(403).json({
            message: "Error fetching user"
        })
    }

})

app.post('/createSpace', middleware , async (req , res) => {
    const parsedData = SpaceSchema.safeParse(req.body);

    if (!parsedData.success) {
        res.status(403).json({
            message: "Invalid Inputs"
        })
        return
    }

    const userId = req.userId;

    try {
        const space = await prismaClient.space.create({
            data: {
                name: parsedData.data.name,
                subject: parsedData.data.subject,
                adminId: userId
            }
        })
        res.json({
            spaceId: space.id,
            message: 'Space created Succesfully'
        })
    } catch (e) {
        res.status(403).json({
            message: "Failed to create Space"
        })
    }
})

app.post('/space/:id', middleware , async (req , res) => {
    const spaceId = Number(req.params.id);
    const userId = req.userId;

    if (!spaceId || !userId) {
        res.status(403).json({
            message: "Invalid space/user Id"
        })
        return
    }

    try {
        const participant = await prismaClient.spaceParticipant.create({
            data: {
                spaceId,
                userId,
                role: "member"
            }
        })
        res.json({
            messsage: "Joined Space Succesfully",
            participantId: participant.id
        })
    } catch (e) {
        res.status(403).json({
            message : "Failed to join space"
        })
    }
})

app.listen(3001);