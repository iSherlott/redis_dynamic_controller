import { Request, Response } from "express";

import { internalError, sendData } from "../services/strutureResponse";

import { MHomeController } from "../enum/message";

const time = new Date()

class HomeController {
    public async main(req: Request, res: Response): Promise<Response> {
        try {
            let api = `${process.env["TITLE"] || "No Title"} Online!`;

            let data = {
                version: process.env["VERSION"] || "1.0.0",
                dataUpdate: time,
            };

            return sendData(res, api, data);
        } catch (error: any) {
            return internalError(res, MHomeController["ERRORDATACONFIG"]);
        }
    }
}

export default new HomeController();
