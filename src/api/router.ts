import { json, ThrowableRouter, withParams } from 'itty-router-extras';

import type { Env } from 'src/namespaces';
import type { RepoParams, RouteRequest } from 'src/types';

export const apiRouter = ThrowableRouter<RouteRequest>({ base: '/api' });

apiRouter.get(
    '/',
    withParams,
    async (request: RouteRequest & RepoParams, env: Env): Promise<Response> => {
        const result = {
            ...env,
            request: {
                url: request.url,
                json: await request.json(),
            },
        };
        return json(result);
    }
);
