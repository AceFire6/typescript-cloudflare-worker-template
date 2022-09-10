import type { Request as IttyRequest } from 'itty-router';

type UnknownContent = { [key: string]: unknown } | number | string;
export type WithContent<T, Content = UnknownContent> = T & { content: Content };

export type RouteRequest = Request & IttyRequest;
export type RepoParams = { params: { org: string; repo: string } };
