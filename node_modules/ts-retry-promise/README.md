# ts-retry-promise #

[![Build Status](https://github.com/normartin/ts-retry-promise/workflows/Node.js%20CI/badge.svg)](https://github.com/normartin/ts-retry-promise/actions?query=workflow%3A%22Node.js+CI%22)
[![Coverage Status](https://coveralls.io/repos/github/normartin/ts-retry-promise/badge.svg?branch=master)](https://coveralls.io/github/normartin/ts-retry-promise?branch=master)
[![Dependencies](https://img.shields.io/badge/Dependencies-none-brightgreen)](https://github.com/normartin/ts-retry-promise/blob/master/package.json)
[![NPM](https://img.shields.io/npm/v/ts-retry-promise.svg?color=#555)](https://www.npmjs.com/package/ts-retry-promise)

_retry for functions returning a promise_

[Changelog](https://github.com/normartin/ts-retry-promise/releases)

## Usage

Install with yarn:
`yarn add ts-retry-promise`

Install with npm:
`npm install --save ts-retry-promise`

Then you can import it with:

```typescript
import { retry } from 'ts-retry-promise';

const result: number = await retry(() => Promise.resolve(1), {retries: 3});
```

This will instantly start calling your function until it returns a resolved promise, no retries are left or a timeout occurred.

If you want to add retries to an existing function, use the decorator:

```typescript
import { retryDecorator } from 'ts-retry-promise';

const asyncFunction = async (s: String) => s;

const decoratedFunction = retryDecorator(asyncFunction, {timeout: 1});

const result: string = await decoratedFunction("1");
```

Here `decoratedFunction` is a function with the same signature as `asyncFunction`, but will do retries in case of failures.

## Configuration

Both `retry` and `retryDecorator` take an optional second argument where you can configure the number of retries and timeouts:

```typescript
export interface RetryConfig<T> {
    // number of maximal retry attempts (default: 10)
    retries?: number | "INFINITELY";

    // wait time between retries in ms (default: 100)
    delay?: number;

    // check the result, will retry until true (default: () => true)
    until?: (t: T) => boolean;

    // log events (default: () => undefined)
    logger?: (msg: string) => void;

    // overall timeout in ms (default: 60 * 1000)
    timeout?: number | "INFINITELY";

    // increase delay with every retry (default: "FIXED")
    backoff?: "FIXED" | "EXPONENTIAL" | "LINEAR" | ((attempt: number, delay: number) => number);

    // maximal backoff in ms (default: 5 * 60 * 1000)
    maxBackOff?: number;
}
```

## Customize ##

_customizeRetry_ returns a new instance of _retry_ that has the defined default configuration.

```typescript
import { customizeRetry } from 'ts-retry-promise'; 

const impatientRetry = customizeRetry({timeout: 5});

await expect(impatientRetry(async () => wait(10))).to.be.rejectedWith("Timeout");

// another example

const retryUntilNotEmpty = customizeRetry({until: (array: any[]) => array.length > 0});

const result = await retryUntilNotEmpty(async () => [1, 2]);

expect(result).to.deep.eq([1, 2]);
```


You can do the same for decorators:
```typescript
import { customizeDecorator } from 'ts-retry-promise'; 

const asyncFunction = async (s: string) => {
    await wait(3);
    return s;
};

const impatientDecorator = customizeDecorator({timeout: 1});

expect(impatientDecorator(asyncFunction)("1")).to.be.rejectedWith("Timeout");
```

## Failure ##
In case `retry` failed, an _error_ is thrown. 
You can access the error that occurred the last time the function has been retried via the property `lastError`:
```typescript
retry(async () => throw "1")
    .catch(err => console.log(err.lastError)); // will print "1" 
```

## NotRetryableError ##
Wrapped function can throw `NotRetryableError` if retrying need to be stopped eventually:
```typescript
import { NotRetryableError } from 'ts-retry-promise';

retry(async () => throw new NotRetryableError("This error"))
    .catch(err => console.log(err.lastError), { retries: 'INFINITELY' });
```

## Samples ##

_retryDecorator_ can be used on any function that returns a promise

```typescript
const loadUserProfile: (id: number) => Promise<{ name: string }> = async id => ({name: "Mr " + id});

const robustProfileLoader = retryDecorator(loadUserProfile, {retries: 2});

const profile = await robustProfileLoader(123);
```


_retry_ is well suited for acceptance tests (but not restricted to)

```typescript
// ts-retry-promise/test/retry-promise.demo.test.ts
it("will retry until no exception or limit reached", async () => {

    await retry(async () => {
        const title = await browser.$("h1");
        expect(title).to.eq("Loaded");
    });

});

it("can return a result", async () => {

    const pageTitle = await retry(async () => {
        const title = await browser.$("h1");
        expect(title).to.be.not.empty;
        return title;
    });

    // do some stuff with the result
    expect(pageTitle).to.eq("Loaded");
});

it("can be configured and has defaults", async () => {

    await retry(async () => {
        // your code
    }, {backoff: "LINEAR", retries: 100});

});

it("will retry until condition is met or limit reached", async () => {

    await retry(
        () => browser.$$("ul"),
        {until: (list) => list.length === 2});

});

it("can have a timeout", async () => {

    const promise = retry(
        () => wait(100),
        {timeout: 10},
    );

    await expect(promise).to.be.rejectedWith("Timeout");
});

it("can create a customized retry", async () => {
    const impatientRetry = customizeRetry({timeout: 5});

    await expect(impatientRetry(async () => wait(10))).to.be.rejectedWith("Timeout");
});

it("can create another customized retry", async () => {
    const retryUntilNotEmpty = customizeRetry({until: (array: number[]) => array.length > 0});

    const result = await retryUntilNotEmpty(async () => [1, 2]);

    expect(result).to.deep.eq([1, 2]);
});

it("can customize default config", async () => {
    const originalTimeout = defaultRetryConfig.timeout;
    try {
        defaultRetryConfig.timeout = 1;

        await expect(retry(async () => wait(10))).to.be.rejectedWith("Timeout");
    } finally {
        defaultRetryConfig.timeout = originalTimeout;
    }
});
```

# Release instructions
Release automation has been setup according this [guide](https://michaelzanggl.com/articles/github-actions-cd-setup/).

1. Create a Github release with version tag like `0.6.1`. 
1. Check the new version exists on [npmjs.com/package/ts-retry-promise](https://www.npmjs.com/package/ts-retry-promise) and has `latest` tag. 
