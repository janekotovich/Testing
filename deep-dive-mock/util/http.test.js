import { expect, it, vi } from "vitest";
const testResData = {
  testKey: "testData",
};

const testFn = vi.fn((url, optionsObj) => {
  return new Promise((resolve, reject) => {
    const testRes = {
      ok: true,
      json() {
        return new Promise((res, rej) => {
          res(testResData);
        });
      },
    };
    resolve(testRes);
  });
});
const testFech = vi.stubGlobal("fetch", testFn);

it("should return any available res data", async () => {});
