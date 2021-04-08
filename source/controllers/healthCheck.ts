import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Health-Check';

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, ``);

    return res.status(200).json({
        status: 'available'
    });
};

export default { sampleHealthCheck };
