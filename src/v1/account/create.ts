import * as express from "express";
import { randomBytes } from 'crypto';
import { computeVerifier, params } from "trinitycore-srp6"
import { database } from '../..';

const create: express.Handler = async (req, res, next) =>  {
    let {email, username, password} = req.body;
    username = username.toUpperCase();
    let salt = randomBytes(32);
    const verifier = computeVerifier(
        params.azerothcore,
        salt,
        username,
        password
    );
    let result = await database.query('INSERT INTO account (username,email,salt,verifier) VALUES (?, ?, ?, ?);', [username, email, salt, verifier]).catch((e) => e as Error);
    if(result instanceof Error)
        return next(result);
    console.log(`Account ${username} created`, result);
    res.status(200).send(result);
}

export default create;