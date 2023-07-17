import { Router } from "express";
import DefaultController from "../controllers/defaultController";

const defaultRouters = Router();

defaultRouters.get("*", DefaultController.index);
defaultRouters.post("*", DefaultController.index);
defaultRouters.put("*", DefaultController.index);
defaultRouters.delete("*", DefaultController.index);

export default defaultRouters;
