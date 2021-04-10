import express from 'express';
import logging from './config/logging';
import HealthCheck from './routes/healthCheck';

const NAMESPACE = 'Server';
const router = express();
express.urlencoded({ extended: false });
express.json();

/* Log Request */
router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(
            NAMESPACE,
            `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], 
             STATUS - [${res.statusCode}]`
        );
    });
    next();
});

// REMOVE BEFORE DEPLOY
// TESTING ONLY
// router.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

//     if (req.method == 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
//         return res.status(200).json({});
//     }

//     next();
// });

/* Routes */
router.use('/', HealthCheck);

/* Error Handling */
router.use((req, res, next) => {
    const error = new Error('Not Found');
    return res.status(404).json({
        message: error.message
    });
});

// const httpServer = http.createServer(router);
// httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));

export default router;
