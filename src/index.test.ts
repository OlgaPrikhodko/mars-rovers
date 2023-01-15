import { setInstructions, appRun } from "./index";
import { rover } from "./roverActions";

describe("test multiply instructions when executing multiple commands", () => {
  it("should return N 1 3 for LMLMLMLMM N 1 2", () => {
    const roverPos = rover("N", { x: 1, y: 2 });
    expect(setInstructions("LMLMLMLMM", roverPos)).toEqual({
      ...roverPos,
      direction: "N",
      coords: { x: 1, y: 3 },
    });
  });

  it("should return 5 1 E for MMRMMRMRRM 3 3 E", () => {
    const roverPos = rover("E", { x: 3, y: 3 });
    expect(setInstructions("MMRMMRMRRM", roverPos)).toEqual({
      ...roverPos,
      direction: "E",
      coords: { x: 5, y: 1 },
    });
  });
});

describe("when execute an application", () => {
  const input = ["1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"];
  expect(appRun(input)).toEqual(["1 3 N", "5 1 E"]);
});
