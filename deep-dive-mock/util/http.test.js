import { expect, it, vi } from "vitest";
import { sendDataRequest } from "./http.js";
import { HttpError } from "./errors.js";

const testResData = {
  testKey: "testData",
};

const wrongDataTypeError = "Data not a string!";

const testFetch = vi.fn((url, optionsObj) => {
  return new Promise((resolve, reject) => {
    if (typeof optionsObj.body !== "string") {
      return reject(wrongDataTypeError);
    }
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

vi.stubGlobal("fetch", testFetch);

it("should return any available res data", async () => {
  const testData = { key: "TestData" };
  const fnCall = await sendDataRequest(testData);
  const fnCall2 = sendDataRequest(testData);
  expect(fnCall).toEqual(testResData);
  await expect(fnCall2).resolves.toEqual(testResData);
});

it("Should stringify our data", async () => {
  const testData = { key: { smth: "No idea what" } };
  let errorMsg;

  try {
    await sendDataRequest(testData);
  } catch (err) {
    errorMsg = wrongDataTypeError;
  }

  expect(errorMsg).not.toBe(wrongDataTypeError);
  // Below - only to test that our rejection is working!
  // expect(errorMsg).toBe(wrongDataTypeError);
});

it("Should throw http err in case of non okay res", async () => {
  testFetch.mockImplementationOnce((url, optionsObj) => {
    return new Promise((resolve, reject) => {
      if (typeof optionsObj.body !== "string") {
        return reject(wrongDataTypeError);
      }
      const testRes = {
        ok: false,
        json() {
          return new Promise((res, rej) => {
            res(testResData);
          });
        },
      };
      resolve(testRes);
    });
  });
  const testData = { key: { smth: "No idea what" } };
  const smthWh = sendDataRequest(testData);

  await expect(smthWh).rejects.toBeInstanceOf(HttpError);
});
