import 'isomorphic-fetch';
import { describe, expect, it } from '@jest/globals';

import baseRouter from 'src/index';

describe('base router', () => {
    it('should have health check endpoint', async () => {
        const result: Response = await baseRouter.fetch(
            new Request('https://example.com/healthz', {
                method: 'GET',
            })
        );

        expect(result.ok).toEqual(true);
        expect(await result.text()).toEqual('ok');
    });

    it('should return 404 for missing endpoints', async () => {
        const result: Response = await baseRouter.fetch(
            new Request('https://example.com/unknown-or-missing', {
                method: 'GET',
            })
        );

        expect(result.ok).toEqual(false);
        expect(result.status).toEqual(404);
    });
});
