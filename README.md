# Mars Rover Challenge

## Setting the Scene

This is program to move rovers around the surface of Mars!
✨
The surface of Mars is represented by a Plateau,
Plateau is a square/rectangular grid for the purpose of this task.
Rovers navigate the Plateau so they can use their special cameras 📷 and robot arms
🦾 to collect samples back to Planet Earth 🌏

Representation of a Rover’s Position on the Plateau
The Plateau is divided into a grid. A Rover’s position is represented by x and y
co-ordinates and the letters N, S, W, E to represent North, South, West, East (the four
cardinal compass points) respectively.

Example

`0 0 N`

This means the Rover is at the bottom-left corner facing in the North direction.
N.B.

Assume that the square directly North from (x, y) is (x, y+1), and the square directly
East from (x, y) is (x + 1, y)

## Instructing a Rover to Move Around the Plateau

💻 To move a Rover around the Plateau, a string of letters is sent to a Rover.
Here are the letters and their resultant action:

**L**- Spins the Rover 90 degrees Left without moving from the current coordinate point

**R** - Spins the Rover 90 degrees Right without moving from the current coordinate point

**M** - Moves the Rover forward by one grid point, maintaining the same heading/orientation

Assume that the square directly North from (x, y) is (x, y+1).

## Inputs into the Program

### First Line of Input to a Rover

The Rover’s position is represented by two integers representing the X and Y coordinates and a letter representing where the Rover is facing (its orientation).

`1 2 N`

### Second Line of Input to a Rover

A string of letters representing the instructions to move the Rover around the Plateau.

`LMLMLMLMM`

### Movement Rules

Rovers move sequentially, this means that the first Rover needs to finish moving first
before the next one can move.

### Output

For each Rover, the output represents its final position (final coordinates and where it is facing).

### Lines of Input to the Program:

`5 5 // Plateau`

`LMLMLMLMM   // Instructions`

`1 2 N       // Rover Position`

`MMRMMRMRRM`

`3 3 E`

Expected Output:

`1 3 N // Rover Position`

`5 1 E // Rover Position`
