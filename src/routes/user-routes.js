import { Router } from "express";
import { createUser, getUser, removeUser, updateUser } from "../controllers/user-controllers.js";

const router = Router();

router.get('/user', getUser);

router.post('/user', createUser);

router.put('/user', updateUser);

router.delete('/user', removeUser);

export default router;