const directions = ["N", "E", "S", "W"] as const;
export type Direction = typeof directions[number];

interface Coordinates {
  x: number;
  y: number;
}

type ActionResult = "Success" | "Fail";

export interface RoverPosition {
  coords: Coordinates;
  direction: Direction;
  limitCoords: Coordinates;
  actionResult: ActionResult;
}

export const rover = (
  direction: Direction,
  coords: Coordinates = { x: 0, y: 0 },
  limitCoords: Coordinates = { x: 5, y: 5 },
  actionResult: ActionResult = "Success"
): RoverPosition => {
  return {
    direction,
    coords,
    limitCoords,
    actionResult,
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

const outOfBorders = (coords: Coordinates, limitCoords: Coordinates) => {
  return (
    coords.x < 0 ||
    coords.y < 0 ||
    coords.x > limitCoords.x ||
    coords.y > limitCoords.y
  );
};

function moveRover(pos: RoverPosition): RoverPosition {
  const coords = pos.coords;
  if (pos.direction === "N") coords.y = coords.y + 1;
  if (pos.direction === "E") coords.x = coords.x + 1;
  if (pos.direction === "S") coords.y = coords.y - 1;
  if (pos.direction === "W") coords.x = coords.x - 1;

  // out of borders
  if (outOfBorders(coords, pos.limitCoords))
    return { ...pos, actionResult: "Fail" };

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
