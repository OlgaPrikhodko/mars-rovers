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

function moveRover(direction: Direction, coords: Coordinates): Coordinates {
  if (direction === "N") coords.y = coords.y + 1;
  if (direction === "E") coords.x = coords.x + 1;
  if (direction === "S") coords.y = coords.y - 1;
  if (direction === "W") coords.x = coords.x - 1;

  return coords;
}

export const setInstruction = (
  pos: RoverPosition,
  instruction: string
): RoverPosition => {
  if (instruction === "M")
    return { ...pos, coords: moveRover(pos.direction, pos.coords) };

  if (instruction === "L")
    return { ...pos, direction: turnLeft(pos.direction) };
  if (instruction === "R")
    return { ...pos, direction: turnRight(pos.direction) };

  return pos;
};
