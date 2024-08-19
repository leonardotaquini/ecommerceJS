import { validationResult } from "express-validator"

export const validateSchema = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        const error = errors.array().map(error => {
            return { [error.location]: error.msg }
        });
        return res.status(400).json({ errors: error });
    }
    next();
}