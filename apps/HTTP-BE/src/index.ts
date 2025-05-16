import express from "express";
import { prismaClient } from "@repo/db/client";

const app = express();
app.use(express.json());

app.listen(3001);