import { rover, RoverPosition, setInstruction } from "./roverActions";

describe("test setInstruction function", () => {
  describe("test move instructions", () => {
    it("if direction N should increment Y coord", () => {
      const roverPos = rover("N", { x: 1, y: 2 });
      expect(setInstruction(roverPos, "M")).toEqual({
        ...roverPos,
        coords: { x: 1, y: 3 },
      });
    });

    it("if direction E should increment X coord", () => {
      const roverPos = rover("E", { x: 1, y: 2 });

      expect(setInstruction(roverPos, "M")).toEqual({
        ...roverPos,
        coords: { x: 2, y: 2 },
      });
    });

    it("if direction S should decrement Y coord", () => {
      const roverPos = rover("S", { x: 1, y: 2 });

      expect(setInstruction(roverPos, "M")).toEqual({
        ...roverPos,
        coords: { x: 1, y: 1 },
      });
    });

    it("if direction W should decrement X coord", () => {
      const roverPos = rover("W", { x: 1, y: 2 });

      expect(setInstruction(roverPos, "M")).toEqual({
        ...roverPos,
        coords: { x: 0, y: 2 },
      });
    });
  });

  describe("test turnLeft function", () => {
    it("should change direction to E if current direction is N", () => {
      const roverPos = rover("N");

      expect(setInstruction(roverPos, "L")).toEqual({
        ...roverPos,
        direction: "E",
      });
    });

    it("should change direction to S if current direction is E", () => {
      const roverPos = rover("E");

      expect(setInstruction(roverPos, "L")).toEqual({
        ...roverPos,
        direction: "S",
      });
    });

    it("should change direction to W if current direction is S", () => {
      const roverPos = rover("S");

      expect(setInstruction(roverPos, "L")).toEqual({
        ...roverPos,
        direction: "W",
      });
    });

    it("should change direction to N if current direction is W", () => {
      const roverPos = rover("W");

      expect(setInstruction(roverPos, "L")).toEqual({
        ...roverPos,
        direction: "N",
      });
    });
  });

  describe("test turnRight function", () => {
    it("should change direction to W if current direction is N", () => {
      const roverPos = rover("N");

      expect(setInstruction(roverPos, "R")).toEqual({
        ...roverPos,
        direction: "W",
      });
    });

    it("should change direction to N if current direction is E", () => {
      const roverPos = rover("E");

      expect(setInstruction(roverPos, "R")).toEqual({
        ...roverPos,
        direction: "N",
      });
    });

    it("should change direction to E if current direction is S", () => {
      const roverPos = rover("S");

      expect(setInstruction(roverPos, "R")).toEqual({
        ...roverPos,
        direction: "E",
      });
    });

    it("should change direction to S if current direction is W", () => {
      const roverPos = rover("W");

      expect(setInstruction(roverPos, "R")).toEqual({
        ...roverPos,
        direction: "S",
      });
    });
  });
});
