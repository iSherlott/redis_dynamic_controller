import { Router } from "express";

import HomeController from "../controllers/homeController";

const homeRouters = Router();

homeRouters.get("/", HomeController.main);

export default homeRouters;
