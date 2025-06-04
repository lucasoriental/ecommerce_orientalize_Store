import { Router } from "express";
import { setupTables } from "../db/setupTables.db.js";

const router = Router();

router.get("/setupTables", setupTables);

export default router;
