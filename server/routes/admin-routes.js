import express from "express"
import { getAdmin, getAdminByID, loginAdmin, registerAdmin } from "../controllers/admin-controller.js";



const adminRouter = express.Router();


adminRouter.post('/register', registerAdmin);
adminRouter.post("/login" , loginAdmin);
adminRouter.get("/getAdmins" ,getAdmin)
adminRouter.get("/:id" ,getAdminByID)


export default adminRouter;