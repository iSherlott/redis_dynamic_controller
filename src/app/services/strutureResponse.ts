import { Response } from "express";

import { SendResponse } from "../interface/InterfaceResponse";

import { MStrutureResponse } from "../enum/message";

export function internalError(
    res: Response,
    message: string
): Response {
    try {
        const status: number = 500;

        const response: SendResponse = {
            status: status,
            msg: message,
            data: null,
        };

        return res.status(status).json(response);
    } catch (error: any) {
        return res.status(500).json(MStrutureResponse["INTERNALERROR"]);
    }
}

export function invalidData(
    res: Response,
    message: string
): Response {
    try {
        const status: number = 400;

        const response: SendResponse = {
            status: status,
            msg: message,
            data: null
        };

        return res.status(status).json(response);
    } catch (error: any) {
        return res.status(500).json(MStrutureResponse["INTERNALERROR"]);
    }
}

export function notFound(res: Response, message: string): Response {
    try {
        const status: number = 404;

        const response: SendResponse = {
            status: status,
            msg: message,
            data: null,
        };

        return res.status(status).json(response);
    } catch (error: any) {
        return res.status(500).json(MStrutureResponse["INTERNALERROR"]);
    }
}

export function Unauthorized(res: Response, message: string): Response {
    try {
        const status: number = 401;

        const response: SendResponse = {
            status: status,
            msg: message,
            data: false,
        };

        return res.status(status).json(response);
    } catch (error: any) {
        return res.status(500).json(MStrutureResponse["INTERNALERROR"]);
    }
}

export async function timeOut(
    res: Response,
    message: string
): Promise<Response> {
    try {
        const status: number = 408;

        const response: SendResponse = {
            status: status,
            msg: message,
            data: null,
        };

        return res.status(status).json(response);
    } catch (error: any) {
        return res.status(500).json(MStrutureResponse["INTERNALERROR"]);
    }
}

export function createData(
    res: Response,
    message: string,
    data: any
): Response {
    try {
        const status: number = 201;

        const response: SendResponse = {
            status: status,
            msg: message,
            data: data,
        };

        return res.status(status).json(response);
    } catch (error: any) {
        return res.status(500).json(MStrutureResponse["INTERNALERROR"]);
    }

}

export function sendData(res: Response, message: string, data: any): Response {
    try {
        const status: number = 200;

        const response: SendResponse = {
            status: status,
            msg: message,
            data: data,
        };

        return res.status(status).json(response);
    } catch (error: any) {
        return res.status(500).json(MStrutureResponse["INTERNALERROR"]);
    }
}
