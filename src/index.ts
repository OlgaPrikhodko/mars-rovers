import {
  Direction,
  setInstruction,
  RoverPosition,
  rover,
} from "./roverActions";

export const setInstructions = (instructions: string, pos: RoverPosition) => {
  for (let instruction of instructions.split("")) {
    pos = setInstruction(pos, instruction);
  }

  return pos;
};

const getInitialRover = (location: string, plateauSize: string = "5 5") => {
  const [maxX, maxY] = plateauSize.split(" ");
  const [x, y, dir] = location.split(" ");
  let direction: Direction = "N";
  if (dir === "S" || dir === "W" || dir === "E") {
    direction = dir;
  }

  return rover(
    direction,
    { x: parseInt(x), y: parseInt(y) },
    { x: parseInt(maxX), y: parseInt(maxY) }
  );
};

const roverPosToStr = (pos: RoverPosition) => {
  return `${pos.coords.x} ${pos.coords.y} ${pos.direction}`;
};

export const appRun = (inputArray: string[]): string[] => {
  const outputArray = [];
  const plateau = inputArray.shift();

  while (inputArray.length > 0) {
    const [location, instructions] = [inputArray.shift(), inputArray.shift()];
    if (typeof location === "string" && typeof instructions === "string") {
      const roverPos = getInitialRover(location, plateau);
      const newRoverPos = setInstructions(instructions, roverPos);
      if (newRoverPos.actionResult === "Fail") {
        return ["Fail " + location];
      }
      outputArray.push(roverPosToStr(newRoverPos));
    }
  }

  return outputArray;
};
