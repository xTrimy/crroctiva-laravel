/// <reference types="vite/client" />
import { route as routeFn } from 'ziggy-js';

declare interface Worker { }
declare interface WebSocket { }

declare namespace WebAssembly {
    interface Module { }
}

declare global {
    var route: typeof routeFn;
}