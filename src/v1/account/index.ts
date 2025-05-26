import * as express from "express";
import create from "./create";

let account = express.Router();
account.post("/create", create);

export default account;