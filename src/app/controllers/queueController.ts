import { Request, Response } from "express";

import { internalError, sendData, createData, invalidData } from "../services/strutureResponse";

import { MGlobal, MHomeController } from "../enum/message";

import { clearRedis, clearKey, listAllKeys, createList, getValueFromList, getAllValuesFromList, popFirstValueFromList, getListLength } from "../utils/redisOperations"

import { isValidNumber } from "../utils/isValidNumber";

class HomeController {
    public async main(req: Request, res: Response): Promise<Response> {
        try {
            const data = await listAllKeys();

            return sendData(res, MGlobal["SUCCESS"], data);
        } catch (error: any) {
            return internalError(res, MHomeController["ERRORDATACONFIG"]);
        }
    }

    public async createOrAdd(req: Request, res: Response): Promise<Response> {
        try {
            const { key } = req.params;

            const { values } = req.query

            if (!values) return invalidData(res, "Value empty");

            const data = await createList(key, [<string>values])

            return sendData(res, MGlobal["SUCCESS"], data);
        } catch (error: any) {
            return internalError(res, MHomeController["ERRORDATACONFIG"]);
        }
    }

    public async getValue(req: Request, res: Response): Promise<Response> {
        try {
            const { key, index } = req.params;

            const validNumber = isValidNumber(parseInt(index));

            if (validNumber) return invalidData(res, validNumber);

            const data = await getValueFromList(key, 0);

            return sendData(res, MGlobal["SUCCESS"], data);
        } catch (error: any) {
            console.log(error.message)
            return internalError(res, MHomeController["ERRORDATACONFIG"]);
        }
    }

    public async getAllValue(req: Request, res: Response): Promise<Response> {
        try {
            const { key } = req.params;
            const data = await getAllValuesFromList(key);

            return sendData(res, MGlobal["SUCCESS"], data);
        } catch (error: any) {
            return internalError(res, MHomeController["ERRORDATACONFIG"]);
        }
    }

    public async popValue(req: Request, res: Response): Promise<Response> {
        try {
            const { key } = req.params;
            const data = await popFirstValueFromList(key);

            return sendData(res, MGlobal["SUCCESS"], data);
        } catch (error: any) {
            return internalError(res, MHomeController["ERRORDATACONFIG"]);
        }
    }

    public async clearKey(req: Request, res: Response): Promise<Response> {
        try {
            const { key } = req.params;

            const data = await clearKey(key);

            return createData(res, MGlobal["SUCCESS"], data);
        } catch (error: any) {
            return internalError(res, MHomeController["ERRORDATACONFIG"]);
        }
    }

    public async clear(req: Request, res: Response): Promise<Response> {
        try {
            const data = await clearRedis();

            return createData(res, MGlobal["SUCCESS"], data);
        } catch (error: any) {
            return internalError(res, MHomeController["ERRORDATACONFIG"]);
        }
    }
}

export default new HomeController();
