import z from "zod";

export const SignUpSchema = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(6),
    avatarUrl: z.string().optional()
})

export const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const SpaceSchema = z.object({
    name: z.string().min(3),
    subject: z.string().min(3),
})

export const DoubtSchema = z.object({
    title: z.string().min(6)
})