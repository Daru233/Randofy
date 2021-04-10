"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = __importDefault(require("../config/logging"));
var NAMESPACE = 'Health-Check';
var sampleHealthCheck = function (req, res, next) {
    logging_1.default.info(NAMESPACE, "");
    return res.status(200).json({
        status: 'available'
    });
};
exports.default = { sampleHealthCheck: sampleHealthCheck };
