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
type InstructionsType = typeof possibleInstructions[number];

interface Position {
  x: number;
  y: number;
  direction: Direction;
}

interface Rover {
  pos: Position;
}

// MAIN
function createPos(x: number, y: number, direction: Direction): Position {
  return { x, y, direction };
}

let pos = createPos(1, 2, "N");
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

function setInstructions(pos: Position, instructions: InstructionsType[]) {
  for (let instruction of instructions) {
    pos = setInstruction(pos, instruction);
  }

  return pos;
}

function setInstruction(pos: Position, instruction: string): Position {
  if (instruction === "M") {
    return moveRover(pos);
  }

  return changeDirection(pos);
}

// ROVER ACTIONS
function moveRover(pos: Position): Position {
  return pos;
}

function changeDirection(pos: Position): Position {
  return pos;
}
