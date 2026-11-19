import { expect, it } from "@jest/globals";
import { retryOnNotFound } from "../src/reporter/annoations-reporter";

const notFound = Object.assign(new Error("Not Found"), { status: 404 });

it("retries 404s until the request succeeds", async () => {
  let calls = 0;
  const result = await retryOnNotFound(async () => {
    if (++calls < 3) throw notFound;
    return "ok";
  }, 5, 1);
  expect(result).toBe("ok");
  expect(calls).toBe(3);
});

it("gives up after the last attempt", async () => {
  let calls = 0;
  await expect(
    retryOnNotFound(async () => {
      calls++;
      throw notFound;
    }, 3, 1)
  ).rejects.toBe(notFound);
  expect(calls).toBe(3);
});

it("does not retry other errors", async () => {
  let calls = 0;
  const boom = Object.assign(new Error("Unprocessable"), { status: 422 });
  await expect(
    retryOnNotFound(async () => {
      calls++;
      throw boom;
    }, 5, 1)
  ).rejects.toBe(boom);
  expect(calls).toBe(1);
});
