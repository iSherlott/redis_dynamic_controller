import { Router } from "express";

import QueueController from "../controllers/queueController";

const queueRouters = Router();

queueRouters.get("/", QueueController.main);
queueRouters.get("/:key", QueueController.getAllValue);
queueRouters.get("/:key/:index", QueueController.getValue);
queueRouters.post("/:key", QueueController.createOrAdd);
queueRouters.put("/:key", QueueController.popValue);
queueRouters.delete("/", QueueController.clear);
queueRouters.delete("/:key", QueueController.clearKey);

export default queueRouters;
