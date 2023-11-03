import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

const articleDB = new Pool ({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT
})

export const pgGetAll = () => {
    let res;
    try {
        articleDB.query("SELECT * FROM articles", (error, result) => {
            if (error) console.error(error);
            else {
                res = result.rows;
                console.log(res);
            }
        })
    } catch {
        console.log("ERROR! @ pgGetAll");
    } finally {
        articleDB.end();
    }
}