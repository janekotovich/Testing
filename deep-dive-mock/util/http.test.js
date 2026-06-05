import { expect, it, vi } from "vitest";
import { sendDataRequest } from "./http.js";

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
vi.stubGlobal("fetch", testFn);

it("should return any available res data", async () => {
  const testData = { key: "TestData" };
  const fnCall = await sendDataRequest(testData);
  const fnCall2 = sendDataRequest(testData);
  expect(fnCall).toEqual(testResData);
  await expect(fnCall2).resolves.toEqual(testResData);
});
