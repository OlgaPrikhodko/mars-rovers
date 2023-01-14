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

  describe("test turnLeft function", () => {
    it("should change direction to E if current direction is N", () => {
      const roverPos: RoverPosition = {
        coords: { x: 1, y: 2 },
        direction: "N",
      };
      expect(setInstruction(roverPos, "L")).toEqual({
        coords: { x: 1, y: 2 },
        direction: "E",
      });
    });

    it("should change direction to S if current direction is E", () => {
      const roverPos: RoverPosition = {
        coords: { x: 1, y: 2 },
        direction: "E",
      };
      expect(setInstruction(roverPos, "L")).toEqual({
        coords: { x: 1, y: 2 },
        direction: "S",
      });
    });

    it("should change direction to W if current direction is S", () => {
      const roverPos: RoverPosition = {
        coords: { x: 1, y: 2 },
        direction: "S",
      };
      expect(setInstruction(roverPos, "L")).toEqual({
        coords: { x: 1, y: 2 },
        direction: "W",
      });
    });

    it("should change direction to N if current direction is W", () => {
      const roverPos: RoverPosition = {
        coords: { x: 1, y: 2 },
        direction: "W",
      };
      expect(setInstruction(roverPos, "L")).toEqual({
        coords: { x: 1, y: 2 },
        direction: "N",
      });
    });
  });
});
