const directions = ["N", "E", "S", "W"] as const;
type Direction = typeof directions[number];

interface Coordinates {
  x: number;
  y: number;
}

export interface RoverPosition {
  coords: Coordinates;
  direction: Direction;
  // limitCoords: Coordinates;
}

export const rover = (
  direction: Direction,
  coords: Coordinates = { x: 0, y: 0 }
): RoverPosition => {
  return {
    direction,
    coords,
  };
};

interface TurnDictionary {
  [key: string]: Direction;
}

const turnRightDictionary: TurnDictionary = {
  N: "E",
  E: "S",
  S: "W",
  W: "N",
} as const;

const turnLeftDictionary: TurnDictionary = {
  N: "W",
  W: "S",
  S: "E",
  E: "N",
} as const;

const turnRight = (pos: RoverPosition) => {
  const direction = turnRightDictionary[pos.direction];
  return { ...pos, direction };
};

const turnLeft = (pos: RoverPosition) => {
  const direction = turnLeftDictionary[pos.direction];
  return { ...pos, direction };
};

function moveRover(pos: RoverPosition): RoverPosition {
  const coords = pos.coords;
  if (pos.direction === "N") coords.y = coords.y + 1;
  if (pos.direction === "E") coords.x = coords.x + 1;
  if (pos.direction === "S") coords.y = coords.y - 1;
  if (pos.direction === "W") coords.x = coords.x - 1;

  return { ...pos, coords };
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
