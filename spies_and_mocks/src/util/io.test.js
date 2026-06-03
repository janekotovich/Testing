import { it, expect, vi } from "vitest";
import writeData from "./io.js";
import { promises as fs } from "fs";

vi.mock("fs");
//The key idea
// You mocked path not because you want to test path's behavior,
// but to make the unpredictable part (absolute filesystem paths) deterministic,
// so you can write a stable assertion about the part you actually care about
// — the filename and data passed to writeFile.
// vi.mock("path");
vi.mock("path", () => {
  return {
    default: {
      join(...args) {
        return args[args.length - 1];
      },
    },
  };
});

it("writeData() should save the file", async () => {
  const testData = "test data here yay";
  const testFileName = "textYay.txt";

  await writeData(testData, testFileName);

  expect(fs.writeFile).toHaveBeenCalled();
});

it("writeData() saves file with expected name", async () => {
  const testData = "test data here yay";
  const testFileName = "textYay.txt";

  await writeData(testData, testFileName);

  expect(fs.writeFile).toHaveBeenCalledWith(testFileName, testData);
});

it("writeData() saves file with expected name", async () => {
  const testData = "test data here yay";
  const testFileName = "textYay.txt";

  await expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
