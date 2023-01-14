import { InstructionsType, RoverPosition, setInstruction } from "../src/index";

describe("test setInstruction function", () => {
  describe("test move instructions", () => {
    it("if direction N should increment Y coord", () => {
      const roverPos: RoverPosition = {
        coords: { x: 1, y: 2 },
        direction: "N",
      };
      expect(setInstruction(roverPos, "M")).toEqual({
        coords: { x: 1, y: 3 },
        direction: "N",
      });
    });

    it("if direction E should increment X coord", () => {
      const roverPos: RoverPosition = {
        coords: { x: 1, y: 2 },
        direction: "E",
      };
      expect(setInstruction(roverPos, "M")).toEqual({
        coords: { x: 2, y: 2 },
        direction: "E",
      });
    });

    it("if direction S should decrement Y coord", () => {
      const roverPos: RoverPosition = {
        coords: { x: 1, y: 2 },
        direction: "S",
      };
      expect(setInstruction(roverPos, "M")).toEqual({
        coords: { x: 1, y: 1 },
        direction: "S",
      });
    });

    it("if direction W should decrement X coord", () => {
      const roverPos: RoverPosition = {
        coords: { x: 1, y: 2 },
        direction: "W",
      };
      expect(setInstruction(roverPos, "M")).toEqual({
        coords: { x: 0, y: 2 },
        direction: "W",
      });
    });
  });
});
