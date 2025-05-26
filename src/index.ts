import express from "express";
import cors from "cors";
import * as mysql from 'mysql2/promise';
import v1 from "./v1";
import { env } from "process";
import 'dotenv/config';

export let database = mysql.createPool({ host: "ac-database", port: 3306, user: "root", password: env.MYSQL_PASSWORD, database: "acore_auth" });

let app = express();
app.listen(3000);
app.use(cors({origin: "*"}));
app.use("/v1", v1);