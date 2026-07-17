import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import { ZodValidationError } from "../common/utils/validation-error";

export function validate(schema: ZodSchema) {
    return (
        req: Request,
        _res: Response,
        next: NextFunction
    ) => {
        const result = schema.safeParse(req.body)
        if(!result.success) {
            throw new ZodValidationError(
                result.error.issues.map(error => ({
                    message: error.message,
                    path: error.path.join("")
                }))
            )
        }
        req.body = result.data
        next()
    }
}