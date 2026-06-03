import { beforeAll, beforeEach, afterEach, afterAll, it, expect } from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
function useCreateUser() {
  return new User(testEmail);
}

it("should update the email", () => {
  const user = useCreateUser();
  const newTestEmail = "test2@test.com";
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it("should have an email property", () => {
  const user = useCreateUser();
  expect(user).toHaveProperty("email");
});

it("should store the provided email value", () => {
  const user = useCreateUser();
  expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
  const user = useCreateUser();
  user.clearEmail();

  expect(user.email).toBe("");
});

it("should still have an email property after clearing the email", () => {
  const user = useCreateUser();
  user.clearEmail();

  expect(user).toHaveProperty("email");
});

it("should still have an email property after clearing the email but empty()", () => {
  const user = useCreateUser();
  user.clearEmail();

  expect(user.email).toBe("");
});
