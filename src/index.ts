import { missing, text, ThrowableRouter } from 'itty-router-extras';

import { apiRouter } from 'src/api';
import type { RouteRequest } from 'src/types';

const baseRouter = ThrowableRouter<RouteRequest>()
    // Health Check
    .get('/healthz', () => text('ok'))
    // The rest of the API
    .all('/*', apiRouter.handle)
    // Catch all 404
    .all('*', () => missing());

export default {
    fetch: baseRouter.handle,
};
