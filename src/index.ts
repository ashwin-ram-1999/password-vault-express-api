import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getAllPasswords, savePassword } from "./service/service";
import { validateRequest } from "./handler/requestHandler";
import cors from "cors";

const app: Express = express();
dotenv.config();
const port: number | string = process.env.PORT || 8090;
app.use(express.json());
app.use(cors());

app.get("/get-all", (req: Request, res: Response) => {
  console.log("Get all passwords called");
  res.status(200).send(getAllPasswords());
});

app.post("/save", (req: Request, res: Response) => {
  console.log("Save password called");
  if (validateRequest(req)) {
    const saved: object = savePassword(req.body);
    res.status(201).send(saved);
  } else
    res
      .status(400)
      .send({ status: "Error", message: "Request Body is not valid" });
});

app.listen(port, () => {
  console.log(`[server] Listening in port ::: ${port}`);
});
