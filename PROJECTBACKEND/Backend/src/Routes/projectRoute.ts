import { Router } from "express";
import { assignProject, createProject, getAllProjects } from "../Controllers/projectController";

const router = Router();

router.post('/createproject',createProject)
router.get('/getallprojects',getAllProjects)
router.post("/assignproject",assignProject)


export default router;