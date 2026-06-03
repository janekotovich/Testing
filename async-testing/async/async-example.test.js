import { it, describe, expect } from "vitest";
import { generateToken } from "./async-example.js";

describe("generateToken()", () => {
  it("Should generate a token value if provided userEmail and doneFn", async () => {
    const dummyEmail = "email123@gmail.com";

    await new Promise((resolve, reject) => {
      generateToken(dummyEmail, (err, token) => {
        try {
          expect(err).toBeNull();
          expect(token).toBeDefined();
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
  });
});
