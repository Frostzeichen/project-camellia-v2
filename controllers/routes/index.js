import express from "express";
import "dotenv/config";
import root from "./root-route.js";

const app = express();
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

root(app);

export default app.listen(PORT, HOST, (error) => {
    if (error) console.error(error);
    else {
        console.log(`${process.env.APP_NAME} version ${process.env.APP_VERSION}`);
        console.log(`Listening! @ address: ${HOST}:${PORT}`);
    }
})