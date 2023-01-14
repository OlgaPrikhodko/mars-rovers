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

export interface Position {
  x: number;
  y: number;
}

export interface RoverPosition {
  coords: Position;
  direction: Direction;
}

interface Rover {
  pos: RoverPosition;
}

// MAIN
let pos: RoverPosition = { coords: { x: 1, y: 2 }, direction: "N" };
const instructions = getInstructions("LMLMLMLMM");

function getInstructions(s: string): InstructionsType[] {
  const res: InstructionsType[] = [];

  for (let letter of s) {
    if (letter === "L" || letter === "R" || letter === "M") {
      res.push(letter);
    } else throw new Error("wrong instructions");
  }

  return res;
}

const newPos = setInstructions(pos, instructions);

function setInstructions(pos: RoverPosition, instructions: InstructionsType[]) {
  for (let instruction of instructions) {
    pos = setInstruction(pos, instruction);
  }

  return pos;
}

export function setInstruction(
  pos: RoverPosition,
  instruction: string
): RoverPosition {
  if (instruction === "M") {
    return moveRover(pos);
  }

  return changeDirection(pos);
}

// ROVER ACTIONS
function moveRover(pos: RoverPosition): RoverPosition {
  if (pos.direction === "N") pos.coords.y = pos.coords.y + 1;
  if (pos.direction === "E") pos.coords.x = pos.coords.x + 1;
  if (pos.direction === "S") pos.coords.y = pos.coords.y - 1;
  if (pos.direction === "W") pos.coords.x = pos.coords.x - 1;

  return pos;
}

function changeDirection(pos: RoverPosition): RoverPosition {
  return pos;
}
