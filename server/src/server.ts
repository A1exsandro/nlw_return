import express from "express";
import cors from 'cors';
import { routes } from "./routes";

// With SQLite and Prisma

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use(express.json());

app.listen(3333, () => {
    console.log('HTTP sever running');
});
 