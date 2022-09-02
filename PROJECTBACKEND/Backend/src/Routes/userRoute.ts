import { Router } from "express";
import { checkAssigned, checkUser, getAllUsers, getHomepage, login, pendingUsers, register, updateComplete } from "../Controllers/userController";
import { VerifyToken } from "../Middleware/VeriftToken";

const router1 = Router()
router1.post('/registeruser',register)
router1.post('/login',login)
router1.post('/markdone',updateComplete)
router1.post('/assigned', checkAssigned)
router1.get("/getallusers",getAllUsers)
router1.get('/nullusers', pendingUsers)

router1.get('/homepage',VerifyToken,getHomepage)
router1.get('/check',VerifyToken,checkUser)

export default router1