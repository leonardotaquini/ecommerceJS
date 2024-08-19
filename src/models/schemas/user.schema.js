import { checkSchema } from "express-validator";

export const userSchema = checkSchema({
    name: {
        in: ["body"],
        isString: true,
        isLength: {
        options: { min: 2, max: 50 },
        },
        errorMessage: "Name must be between 2 and 50 characters",
    },
    email: {
        in: ["body"],
        isString: true,
        isEmail: true,
        errorMessage: "Invalid email",
    },
    password: {
        in: ["body"],
        isString: true,
        isLength: {
        options: { min: 6 },
        },
        errorMessage: "Password must be at least 6 characters",
    },
    role: {
        in: ["body"],
        isString: true,
        isIn: {
        options: [["cliente", "vendedor", "admin"]],
        errorMessage: "Invalid role",
        },
    },
    });
