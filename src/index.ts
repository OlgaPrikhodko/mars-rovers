import { setInstruction } from "./roverActions";

// plateau = createPlateau(x: number, y: number)
// rover: Rover = createRover(pos: Position)
// newPos:Position = setInstruction(rover: Rover, instructions: string)

// MAIN

const setInstructions = (pos: RoverPosition, instructions: string) => {
  for (let instruction of instructions.split("")) {
    pos = setInstruction(pos, instruction);
  }

  return pos;
};

// USAGE
// let pos: RoverPosition = { coords: { x: 1, y: 2 }, direction: "N" };
// const instructions = getInstructions("LMLMLMLMM");

// const newPos = setInstructions(pos, instructions);
