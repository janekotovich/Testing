import { describe, expect, it, beforeEach } from "vitest";
import { savePost, extractPostData } from "./posts.js";

// describe("savePost", () => {});
const testTitle = "Title";
const testContent = "Content";
let testFormData;

describe("extractPostData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });
  it("Extracts title and contact from provided form", () => {
    const data = extractPostData(testFormData);
    expect(data.content).toBe(testContent);
    expect(data.title).toBe(testTitle);
  });
});
