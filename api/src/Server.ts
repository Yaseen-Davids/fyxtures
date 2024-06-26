import cookieParser from "cookie-parser";
import express from "express";
import logger from "morgan";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

// import BaseRouter from "./routes";
import indexRouter from "./routes/index";
import footballRouter from "./routes/football";
import formulaOneRouter from "./routes/formula-one";

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
app.use("/api/formula-one", formulaOneRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static assets in production
if (process.env.VERCEL_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../../ui/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../ui/dist", "index.html"));
  });
}

const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

export const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  console.log("Express server started on port: " + port);
});

export default app;
