import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Sample Controller';

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Server was pinged, sending pong`);

    return res.status(200).json({
        message: 'pong'
    });
};

export default { sampleHealthCheck };
