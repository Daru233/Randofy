import request from 'supertest';
import router from '../../source/app';

describe('Test HealthCheck Service', () => {
    it('should invoke healthcheck service', async () => {
        const result = await request(router).get('/').send();

        expect(result.status).toBe(200);
        expect(result.body.status).toBe('available');
    });
});

describe('When an invalid route is hit return a 404', () => {
    it('should should return 404', async () => {
        const result = await request(router).get('/invalid/route/oijsdfivh').send();

        expect(result.status).toBe(404);
        expect(result.body.message).toBe('Not Found');
    });
});
