const directions = ["N", "E", "S", "W"] as const;
type Direction = typeof directions[number];

export interface Coordinates {
  x: number;
  y: number;
}

export interface RoverPosition {
  coords: Coordinates;
  direction: Direction;
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

function moveRover(pos: RoverPosition): RoverPosition {
  if (pos.direction === "N") pos.coords.y = pos.coords.y + 1;
  if (pos.direction === "E") pos.coords.x = pos.coords.x + 1;
  if (pos.direction === "S") pos.coords.y = pos.coords.y - 1;
  if (pos.direction === "W") pos.coords.x = pos.coords.x - 1;

  return pos;
}

export const setInstruction = (
  pos: RoverPosition,
  instruction: string
): RoverPosition => {
  if (instruction === "M") return moveRover(pos);

  if (instruction === "L") return turnLeft(pos);

  if (instruction === "R") return turnRight(pos);

  return pos;
};