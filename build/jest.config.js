"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    clearMocks: true,
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    preset: 'ts-jest',
    roots: ['<rootDir>/__tests__'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
};
exports.default = config;
