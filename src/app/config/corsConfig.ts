import express, { Express } from "express";

import cors from "cors";
import routers from "../routers";

export default function appConfig(app: Express): void {
    app.use(cors());
    app.use(express.json({ limit: '900mb' }));
    app.use(express.urlencoded({ limit: '900mb', extended: true }));
    app.use(routers);
}
