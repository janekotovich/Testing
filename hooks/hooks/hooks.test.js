import {
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  it,
  expect,
  describe,
} from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
let user = new User(testEmail);

describe("useCreateUser()", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });
  beforeEach(() => {
    console.log("beforeEach");
  });
  afterEach(() => {
    user = new User(testEmail);
  });
  afterAll(() => {
    console.log("afterAll");
  });

  it.concurrent("should update the email", () => {
    const newTestEmail = "test2@test.com";
    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
  });

  it.concurrent("should have an email property", () => {
    expect(user).toHaveProperty("email");
  });

  it("should store the provided email value", () => {
    expect(user.email).toBe(testEmail);
  });

  it("should clear the email", () => {
    user.clearEmail();

    expect(user.email).toBe("");
  });

  it("should still have an email property after clearing the email", () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  });

  it("should still have an email property after clearing the email but empty()", () => {
    user.clearEmail();

    expect(user.email).toBe("");
  });
});
