import express from "express";
 
import { 
    getAlllists,
    createlists,
    getlistsById,
    updatelists,
    deletelists
} from "../controllers/list.js";
 
const router = express.Router();
 
router.get('/', getAlllists);
router.get('/:id', getlistsById);
router.post('/', createlists);
router.patch('/:id', updatelists);
router.delete('/:id', deletelists);
 
export default router;