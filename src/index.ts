import {
  Direction,
  setInstruction,
  RoverPosition,
  rover,
} from "./roverActions";

// plateau = createPlateau(x: number, y: number)

export const setInstructions = (instructions: string, pos: RoverPosition) => {
  for (let instruction of instructions.split("")) {
    pos = setInstruction(pos, instruction);
  }

  return pos;
};

const getInitialRover = (location: string) => {
  const [x, y, dir] = location.split(" ");
  let direction: Direction = "N";
  if (dir === "S" || dir === "W" || dir === "E") {
    direction = dir;
  }

  return rover(direction, { x: parseInt(x), y: parseInt(y) });
};

const roverPosToStr = (pos: RoverPosition) => {
  return `${pos.coords.x} ${pos.coords.y} ${pos.direction}`;
};

export const appRun = (inputArray: string[]): string[] => {
  const outputArray = [];
  while (inputArray.length > 0) {
    const [location, instructions] = [inputArray.shift(), inputArray.shift()];
    if (typeof location === "string" && typeof instructions === "string") {
      const roverPos = getInitialRover(location);
      const newRoverPos = setInstructions(instructions, roverPos);
      outputArray.push(roverPosToStr(newRoverPos));
    }
  }

  return outputArray;
};
