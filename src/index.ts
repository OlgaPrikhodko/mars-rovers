import {
  Direction,
  setInstruction,
  RoverPosition,
  rover,
} from "./roverActions";

import { clear, print, askQuestion } from "./console";

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

// console.log(appRun(["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"]));
const output: string[] = [];

function checkPlateauSize(s: string) {
  return s && /^\d+ \d+$/.test(s);
}

function getPlateauString(value: string) {
  if (checkPlateauSize(value)) {
    output.push(value);
    print(
      `....succesfully got upper-right Plateau coordinates...............[${value}]`
    );
    // return getRoverPosition();
  }

  return endMission();
}

function getPlateauInput() {
  askQuestion(
    `Please input the upper-right coordinates of the
    Plateau? (expecting format: 'X Y' e.g. '5 5')`,
    getPlateauString
  );
}

function endMission(): void {
  clear(false);
  print("***************************************");
  print(`Sadly, the entry code failed! Please try again ☹`);
  print("***************************************");
  askQuestion("Press ENTER to restart! ", startMarsRoverMission);
}

function startMarsRoverMission(): void {
  clear(false);
  print("----------------------------------");
  print("| Welcome to Mars Rover Mission! |");
  print("----------------------------------");
  print(`This is a program to move rovers around the surface of Mars.`);
  print("--------------------------------------------");
  getPlateauInput();

  // getPlateau coords
  // get rovers coords
  // would you like send another Rover?
}

startMarsRoverMission();
