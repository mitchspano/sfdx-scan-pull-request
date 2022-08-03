export declare const timeout: <T>(millis: number | "INFINITELY", f: (done: () => boolean) => Promise<T>) => Promise<T>;
