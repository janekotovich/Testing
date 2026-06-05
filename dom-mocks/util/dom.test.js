import { describe, it, expect } from "vitest";
import { showError } from "./dom.js";
import fs from "fs";
import path from "path";
import { Window } from "happy-dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocContent);

describe("showError()", () => {
  it("Shows err", () => {
    const someError = "Some big error BAM";
    showError(someError);
  });
});
