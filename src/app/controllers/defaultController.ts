import { Request, Response } from "express";

import { MDefaultController } from "../enum/message";

import { internalError, notFound } from "../services/strutureResponse";

class DefaultController {
    public async index(req: Request, res: Response): Promise<Response> {
        try {
            return notFound(res, MDefaultController["ROUTERNOTFOUND"]);
        } catch (error: any) {
            return internalError(res, MDefaultController["ERRORROUTERNOTFOUND"]);
        }
    }
}

export default new DefaultController();
