import express from "express";
import userRoutes from "./routes/user-routes.js";

const app = express();

app.use(userRoutes);

app.listen(3000);

console.log('server running on port 3000');
