const directions = ["N", "E", "S", "W"] as const;
type Direction = typeof directions[number];

export interface Coordinates {
  x: number;
  y: number;
}

export interface RoverPosition {
  coords: Coordinates;
  direction: Direction;
  // limitCoords: Coordinates;
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

const turnRight = (direction: Direction) => {
  return turnRightDictionary[direction];
};

const turnLeft = (direction: Direction) => {
  return turnLeftDictionary[direction];
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

  if (instruction === "L")
    return { ...pos, direction: turnLeft(pos.direction) };
  if (instruction === "R")
    return { ...pos, direction: turnRight(pos.direction) };

  return pos;
};
