import express from "express";
import router from "./router/index.js";
import connectMongoDb from "./connect.js";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

const app = express();

const port = process.env.PORT || 3000;
connectMongoDb(process.env.DATABASE_URI);

app.use(
  cors({
    origin: "http://localhost:5173", // Specify the exact frontend origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.options("/*splat", cors());

app.use(cookieParser());
app.use(express.json());
app.use("/v1", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
