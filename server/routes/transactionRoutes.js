import express from 'express';
import { addTransaction, editTransaction, getAllTransaction, deleteTransection } from '../controllers/transactionController.js';


const router = express.Router();

router.post('/addTransaction',addTransaction);
router.post('/getTransaction', getAllTransaction )
router.post('/editTransaction', editTransaction )
router.post('/deleteTransaction', deleteTransection)
export default router;
