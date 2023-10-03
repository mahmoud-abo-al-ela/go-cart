import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import error from "./middleware/error.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/userRoute.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/v1/", userRouter);

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
// });

app.use(error);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(5000, () => {
      console.log(`server is run on port 5000`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
