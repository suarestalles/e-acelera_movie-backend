import HttpStatusCodes from "../constants/HttpStatusCodes";
import { RouteError } from "./route-errors";

export class ZodValidationError extends RouteError {
    constructor(private readonly errors: unknown) {
        super(
            HttpStatusCodes.BAD_REQUEST,
            JSON.stringify({
                message: "Validation error",
                errors
            })
        )
    }
}