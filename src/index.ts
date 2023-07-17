import app from "./app/app";
import * as dotenv from 'dotenv'

dotenv.config()
const PORT = process.env["PORT"] || 8080;

app.listen(PORT, () => console.log(`Server Running in ${PORT}!`));
