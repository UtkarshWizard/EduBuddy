import express from "express";
import { prismaClient } from "@repo/db/client";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt from "jsonwebtoken";
import { AnswerSchema, DoubtSchema, SignInSchema, SignUpSchema, SpaceSchema } from "@repo/common/types";
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

app.post('/joinSpace/:id', middleware , async (req , res) => {
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

app.post('/space/:id/createDoubt' , middleware , async (req , res) => {
    const parsedData = DoubtSchema.safeParse(req.body);

    if (!parsedData.success) {
        res.status(403).json({
            message : "Invalid Inputs"
        });
        return
    }

    const askedById = req.userId;
    const askedSpaceId = Number(req.params.id);

    if (!askedSpaceId || !askedById) {
        res.status(403).json({
            message : "Not authorized"
        });
        return
    }

    try {
        const doubt = await prismaClient.doubt.create({
            data: {
                title: parsedData.data.title,
                askedById,
                askedSpaceId,
            }
        })
        res.json({
            doubt,
            message: "Doubt created Succesfully"
        })
     } catch (e) {
        res.status(403).json({
            message: "Doubt creation failed"
        })
     }
})

app.post('/answer/doubt/:id', middleware , async (req , res) => {
    const parsedData = AnswerSchema.safeParse(req.body);

    if (!parsedData.success) {
        res.status(403).json({
            message: "Invalid Inputs"
        });
        return
    }

    const doubtId = req.params.id;
    const answeredById = req.userId;

    if (!answeredById || !doubtId) {
        res.status(403).json({
            message: "Invalid Doubt Id"
        })
        return
    }

    try {
        const doubt = await prismaClient.doubt.findFirst({
            where: {
                id: doubtId
            }
        });

        if (!doubt) {
            res.status(403).json({
                message: "Doubt does not exist"
            });
            return
        }

        const answeredDoubt = await prismaClient.doubt.update({
            where: {
                id: doubt.id
            } , 
            data: {
                answer : parsedData.data.answer,
                answeredById,
            }
        })
        res.json({
            message: "Anwered Succesfully",
            answeredDoubt
        })
    } catch (e) {
        res.status(403).json({
            message: "Failed to answer doubt"
        })
    }
})

app.get('/spaces' , middleware , async ( req , res ) => {
    try {
        const spaces = await prismaClient.space.findMany({
            include: {
                admin: true,
                participants: {
                    include: { user: true}
                },
                doubt: true,
                chat: true
            }
        })
        res.json({
            spaces
        })
    } catch (e) {
        res.status(403).json({
            message :"Failed to get rooms"
        })
    }
})

app.get('/space/:id' , middleware , async (req, res) =>{
    const id = Number(req.params.id);

    const space = await prismaClient.space.findUnique({
        where: {
            id
        }
    })

    if (!space) {
        res.status(404).json({
            message: "Space does not exist"
        })
        return
    }

    res.json({
        space
    })
})

app.get('/space/:id/doubts' , middleware , async (req , res) => {
    const id = Number(req.params.id);

    const doubts = await prismaClient.doubt.findMany({
        where: {
            askedSpaceId: id
        }
    })

    if (!doubts) {
        res.status(404).json({
            message: "No Doubt exist"
        })
        return
    }

    res.json({
        doubts
    })
})

app.get('/doubt/:id/answer', middleware , async (req ,res) => {
    const id = req.params.id;

    const answer = await prismaClient.doubt.findFirst({
        where: {
            id
        } , 
        select: {
            answer : true
        }
    })

    if (!answer) {
        res.status(404).json({
            message : "Not Anwered"
        })
    }

    res.json({
        answer
    })
})

app.listen(3001);