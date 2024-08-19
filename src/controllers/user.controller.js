import { Router } from "express";
import { UserService } from "../services/user.service.js";
import { userSchema } from "../models/schemas/user.schema.js";
import { validateSchema } from "../middlewares/validate.schema.js";

const router = Router();
const userService = new UserService();

router.get('/', userService.getUsers);
router.get('/:id', userService.getUser);
router.post('/', userSchema, validateSchema, userService.createUser);
router.patch('/:id', userSchema, validateSchema, userService.updateUser);
router.delete('/:id', userService.deleteUser);

export default router;