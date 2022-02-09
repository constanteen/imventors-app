import type { NextFetchEvent, NextRequest } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("request:", req);
  console.log("ev:", ev);
}
