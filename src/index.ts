// Lines of Input to the Program:
// 5 5         // Plateau
// 1 2 N       // Rover Position
// LMLMLMLMM   // Instructions

// Expected Output:
// 1 3 N       // Rover Position

// plateau = createPlateau(x: number, y: number)
// rover: Rover = createRover(pos: Position)
// newPos:Position = setInstruction(rover: Rover, instructions: string)

// TYPES:

const directions = ["N", "E", "S", "W"] as const;
type Direction = typeof directions[number];

const possibleInstructions = ["L", "R", "M"] as const;
export type InstructionsType = typeof possibleInstructions[number];

export interface Coordinates {
  x: number;
  y: number;
}

export interface RoverPosition {
  coords: Coordinates;
  direction: Direction;
}

// ROVER ACTIONS
function moveRover(pos: RoverPosition): RoverPosition {
  if (pos.direction === "N") pos.coords.y = pos.coords.y + 1;
  if (pos.direction === "E") pos.coords.x = pos.coords.x + 1;
  if (pos.direction === "S") pos.coords.y = pos.coords.y - 1;
  if (pos.direction === "W") pos.coords.x = pos.coords.x - 1;

  return pos;
}

interface TurnDictionary {
  [key: string]: Direction;
}

const turnLeftDictionary: TurnDictionary = {
  N: "E",
  E: "S",
  S: "W",
  W: "N",
} as const;

const turnRightDictionary: TurnDictionary = {
  N: "W",
  E: "N",
  S: "E",
  W: "S",
} as const;

const turnLeft = (pos: RoverPosition): RoverPosition => {
  pos.direction = turnLeftDictionary[pos.direction];

  return pos;
};

const turnRight = (pos: RoverPosition): RoverPosition => {
  pos.direction = turnRightDictionary[pos.direction];

  return pos;
};

// MAIN

export const setInstruction = (
  pos: RoverPosition,
  instruction: string
): RoverPosition => {
  if (instruction === "M") return moveRover(pos);

  if (instruction === "L") return turnLeft(pos);

  if (instruction === "R") return turnRight(pos);

  return pos;
};

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
