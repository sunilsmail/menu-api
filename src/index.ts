import * as dotenv from "dotenv";
import helmet from "helmet";
import express from "express";
import cors from "cors";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: Number = parseInt(process.env.PORT as string, 10);
const app = express();

//middle ware

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log('hello world');
    console.log('server running at port - ', PORT);
});
