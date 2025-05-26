import * as express from "express";
import bodyParser from "body-parser";
import account from "./account";

let api = express.Router();
api.use(bodyParser.json({strict: false}))
api.use("/account", account)

export default api;