# TypeScript project with Tests

This repository can be used as a template for creating a TypeScript project using Jest for testing.

## Instructions

- Click the "Use this template" button

- Click "Create new repository"

- Give your repository a name and click "Create repository from template"

- Clone down your new repository to your computer

- Navigate to the directory on your command line

- Run `npm install` followed by `npm test` to run the tests

# Inputs into the Program

# First Line of Input to the Program

The first line inputted into the program represents the upper-right coordinates of the Plateau.

5 5

This Plateau has maximum (x, y) co-ordinates of (5, 5).
N.B. Assume that the lower-left coordinate is (0, 0).

Subsequent Lines of Input into the Program - Input to Rovers
This represents the instructions to move the rovers.
Each rover receives two lines of input.

# First Line of Input to a Rover

The Rover’s position is represented by two integers representing the X and Y
coordinates and a letter representing where the Rover is facing (its orientation).

1 2 N

# Second Line of Input to a Rover

A string of letters representing the instructions to move the Rover around the Plateau.

LMLMLMLMM

# Movement Rules

Rovers move sequentially, this means that the first Rover needs to finish moving first
before the next one can move.

# Output

For each Rover, the output represents its final position (final coordinates and where it is
facing).

// Lines of Input to the Program:
// 5 5 // Plateau
// 1 2 N // Rover Position
// LMLMLMLMM // Instructions
// MMRMMRMRRM

// Expected Output:
// 1 3 N // Rover Position
// 5 1 E // Rover Position
