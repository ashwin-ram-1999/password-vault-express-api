import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getAllPasswords, savePassword } from "./service/service";
import { validateRequest } from "./handler/requestHandler";

const app: Express = express();
dotenv.config();
const port: number | string = process.env.PORT || 8090;
app.use(express.json());

app.get("/get-all", (req: Request, res: Response) => {
  res.status(200).send(getAllPasswords());
});

app.post("/save", (req: Request, res: Response) => {
  if (validateRequest(req)) {
    const saved: object = savePassword(req.body);
    res.status(201).send(saved);
  } else res.status(400).send("Request Body is not valid");
});

app.listen(port, () => {
  console.log(`[server] Listening in port ::: ${port}`);
});
