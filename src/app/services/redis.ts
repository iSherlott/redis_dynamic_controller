import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const host = process.env["REDIS_HOST"] ?? "localhost"
const port = process.env["REDIS_PORT"] ? parseInt(process.env["REDIS_PORT"]) : 6379;

const redis = new Redis({
    host: host,
    port: port
});

redis.on('connect', () => {
    console.log('Connected to Redis');
});

redis.on('error', (err) => {
    console.error('Failed to connect to Redis:', err);
    throw err;
});

export default redis;
