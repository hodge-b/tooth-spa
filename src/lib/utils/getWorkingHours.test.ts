import { describe, expect, it } from "vitest";

import { getWorkingHours } from "@/lib/utils/getWorkingHours";

describe("getWorkingHours", () => {
  it("converts a morning-to-evening range to 24-hour bounds", () => {
    expect(getWorkingHours("10AM-7PM")).toEqual(["10", "19"]);
  });

  it("converts a range ending before noon", () => {
    expect(getWorkingHours("9AM-12PM")).toEqual(["9", "12"]);
  });

  it("converts a range starting at noon", () => {
    expect(getWorkingHours("12PM-8PM")).toEqual(["12", "20"]);
  });
});
