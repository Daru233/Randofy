import express from 'express';
import controller from '../controllers/healthCheck';

const router = express.Router();

router.get('/', controller.sampleHealthCheck);

export = router;
