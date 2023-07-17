import redis from '../services/redis';

export async function clearRedis(): Promise<string> {
    try {
        await redis.flushdb();

        return 'Redis database cleared';
    } catch (err) {
        console.error(err);

        return "Clear failed"
    }
}

export async function clearKey(key: string): Promise<string> {
    try {
        await redis.del(key);
        return `Key ${key} cleared`;
    } catch (err) {
        console.error(err);

        return `Clear ${key} failed`
    }
}

export async function listAllKeys(): Promise<string[]> {
    try {
        const keys = await redis.keys('*');
        return keys;
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function createList(key: string, values: string[] = []): Promise<string> {
    try {
        await redis.rpush(key, ...values);

        return "Create success"
    } catch (err) {
        console.error(err);

        return "Create failed"
    }
}

export async function getValueFromList(key: string, index: number): Promise<string | null> {
    try {
        const value = await redis.lindex(key, index);
        return value;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function getAllValuesFromList(key: string): Promise<string[] | null> {
    try {
        const values = await redis.lrange(key, 0, -1);
        return values;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function popFirstValueFromList(key: string): Promise<string | null> {
    try {
        const value = await redis.lpop(key);
        return value;
    } catch (err) {
        console.error(err);
        return null;
    }
}


export async function getListLength(key: string): Promise<number | null> {
    try {
        const length = await redis.llen(key);
        return length;
    } catch (err) {
        console.error(err);
        return null;
    }
}
