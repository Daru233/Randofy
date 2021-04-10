"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logging_1 = __importDefault(require("./config/logging"));
var healthCheck_1 = __importDefault(require("./routes/healthCheck"));
var NAMESPACE = 'Server';
var router = express_1.default();
express_1.default.urlencoded({ extended: false });
express_1.default.json();
/* Log Request */
router.use(function (req, res, next) {
    logging_1.default.info(NAMESPACE, "METHOD - [" + req.method + "], URL - [" + req.url + "], IP - [" + req.socket.remoteAddress + "]");
    res.on('finish', function () {
        logging_1.default.info(NAMESPACE, "METHOD - [" + req.method + "], URL - [" + req.url + "], IP - [" + req.socket.remoteAddress + "], \n             STATUS - [" + res.statusCode + "]");
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
router.use('/', healthCheck_1.default);
/* Error Handling */
router.use(function (req, res, next) {
    var error = new Error('Not Found');
    return res.status(404).json({
        message: error.message
    });
});
// const httpServer = http.createServer(router);
// httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));
exports.default = router;
