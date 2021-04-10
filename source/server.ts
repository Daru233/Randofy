import http from 'http';
import logging from './config/logging';
import config from './config/config';
import router from './app';

const NAMESPACE = 'App';

const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));

// testing workflow
