import morganMiddleware from "@/middlewares/morganMiddleware";
import mainRouter from "@/routes";
import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();

// Middlewares
app.use(morganMiddleware);
app.use(cors());

console.log("hello from app");

app.get("/", (req, res) => res.send("✅ Server is running!"));
app.use("/api/v1/", mainRouter);

export default app;
