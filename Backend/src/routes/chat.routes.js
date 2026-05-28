import { Router } from 'express';
import { sendMessage } from '../controller/chat.controller.js';

const router = Router();
router.post('/message', sendMessage);

export default router;