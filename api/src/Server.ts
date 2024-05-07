import cookieParser from "cookie-parser";
import express from "express";
import logger from "morgan";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

// import BaseRouter from "./routes";
import indexRouter from "./routes/index";
import footballRouter from "./routes/football";

// Init express
const app = express();
dotenv.config();

app.use(cors());

// Add middleware/settings/routes to express.
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use("/api", indexRouter);
app.use("/api/football", footballRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

export default app;
