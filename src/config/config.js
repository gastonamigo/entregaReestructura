import dotenv from "dotenv"

dotenv.config ();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const PERSISTENCE= process.env.PERSISTENCE

export const options = {
    server:{
        port:PORT,
        persistence: PERSISTENCE
    },
    mongo:{
        url:MONGO_URL
    },
    auth:{
        account: ADMIN_EMAIL,
        pass: ADMIN_PASSWORD
    }
}