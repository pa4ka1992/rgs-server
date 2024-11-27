import express from "express";
import cors from "cors";
import { defineRoutes } from "./routes/index.js";
import { errorMiddleware } from "./middleware/error-middleware.js";

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
defineRoutes(app);
app.use(errorMiddleware);

(async () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})();
