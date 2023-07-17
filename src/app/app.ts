import express from "express";
import appConfig from "./config/corsConfig";

const app = express();

appConfig(app);

export default app;
