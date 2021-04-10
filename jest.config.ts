import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    clearMocks: true,
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    preset: 'ts-jest',
    roots: ['<rootDir>/__tests__'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
};

export default config;
