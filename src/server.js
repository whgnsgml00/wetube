import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouters";
import userRouter from "./routers/userRouters";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.set("view engine", "pug");
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => {
    console.log(`server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);

