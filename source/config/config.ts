import dotenv from 'dotenv';

dotenv.config();

const HOSTNAME = process.env.HOSTNAME || '0.0.0.0';
const PORT = process.env.SERVER_PORT || 8080;

const SERVER = {
    hostname: HOSTNAME,
    port: PORT
};

const config = {
    server: SERVER
};

export default config;
