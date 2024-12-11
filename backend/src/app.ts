import Express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes";
import userRoutes from "./routes/userRoutes";

const app = Express();

app.use(cors());
app.use(Express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);

export default app;