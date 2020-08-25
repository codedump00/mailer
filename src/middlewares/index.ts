import { Request, NextFunction, Response } from 'express';
const ValidationError = { error: 'Params are not valid!' };

export function validateOTPMail(req: Request, res: Response, next: NextFunction) {
    if (
        req.body.from !== null && req.body.subject !== null &&
        req.body.text !== null && req.body.to !== null &&
        req.body.otp !== null
    ) {
        next();
    }
    return res.status(400).json(ValidationError);
}