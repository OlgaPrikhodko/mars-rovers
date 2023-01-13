import { InstructionsType, RoverPosition, setInstruction } from "../src/index";

describe("test setInstruction function", () => {
  it("should move Rover", () => {
    const roverPos: RoverPosition = { coords: { x: 1, y: 2 }, direction: "N" };
    const instruction: InstructionsType = "M";
    expect(setInstruction(roverPos, instruction)).toEqual({
      coords: { x: 1, y: 3 },
      direction: "N",
    });
  });
});
