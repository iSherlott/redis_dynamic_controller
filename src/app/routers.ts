import { Router } from "express";

import homeRouters from "./routers/homeRouters";
import queueRouters from "./routers/queueRouters";
import defaultRouters from "./routers/defaultRouters";

const router = Router();

router.use("/", homeRouters);
router.use("/queue", queueRouters);
router.use("*", defaultRouters);

export default router;
