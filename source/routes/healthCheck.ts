import express from 'express';
import controller from '../controllers/HealthCheck';

const router = express.Router();

router.get('/', controller.sampleHealthCheck);

export = router;
