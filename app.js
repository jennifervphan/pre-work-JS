// Rover Object Goes Here
// ======================
var roverA = {
    name: "A",
    direction: "N",
    postX: 0,
    postY: 0,
    travelLog: [],
}

var roverB = {
    name: "B",
    direction: "N",
    postX: 4,
    postY: 4,
    travelLog: [],
}

var roverC = {
    name: "C",
    direction: "N",
    postX: 9,
    postY: 9,
    travelLog: [],

}

var grid = [
        ['', 'x', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', 'x', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', 'x', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', 'x', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', 'x', ''],
        ['', '', '', '', '', '', '', '', '', ''],
    ]
    // ======================

function turnLeft(rover) {
    switch (rover.direction) {
        case rover.direction = "N":
            rover.direction = "W";
            break;
        case rover.direction = "S":
            rover.direction = "E";
            break;
        case rover.direction = "E":
            rover.direction = "N";
            break;
        case rover.direction = "W":
            rover.direction = "S";
            break;
    }
    console.log("Turn left was called! Rover is now facing " + rover.direction);
};

function turnRight(rover) {
    switch (rover.direction) {
        case rover.direction = "N":
            rover.direction = "E";
            break;
        case rover.direction = "S":
            rover.direction = "W";
            break;
        case rover.direction = "E":
            rover.direction = "S";
            break;
        case rover.direction = "W":
            rover.direction = "N";
            break;
    }
    console.log("Turn right was called! Rover is now facing " + rover.direction);
};

function moveForward(rover) {
    rover.travelLog.push([rover.postX, rover.postY]);
    switch (rover.direction) {
        case rover.direction = "N":
            if (rover.postY === 0) {
                console.log("Rover is at border,cannot move forward in this direction!")
            } else {
                rover.postY -= 1;
            }
            break;
        case rover.direction = "S":
            if (rover.postY === 9) {
                console.log("Rover is at border,cannot move forward in this direction!");
            } else {
                rover.postY += 1;
            }
            break;
        case rover.direction = "E":
            if (rover.postX === 9) {
                console.log("Rover is at border,cannot move forward in this direction!");
            } else {
                rover.postX += 1;
            }
            break;
        case rover.direction = "W":
            if (rover.postX === 0) {
                console.log("Rover is at border,cannot move forward in this direction!")
            } else {
                rover.postX -= 1;
            }
            break;
    }
    obstacleAhead(rover);
};

function moveBackward(rover) {
    rover.travelLog.push([rover.postX, rover.postY]);
    switch (rover.direction) {
        case rover.direction = "N":
            if (rover.postY === 9) {
                console.log("Rover is at border,cannot move forward in this direction!")
            } else {
                rover.postY += 1;
            }
            break;
        case rover.direction = "S":
            if (rover.postY === 0) {
                console.log("Rover is at border,cannot move forward in this direction!")
            } else {
                rover.postY -= 1;
            }
            break;
        case rover.direction = "E":
            if (rover.postX === 0) {
                console.log("Rover is at border,cannot move forward in this direction!")
            } else {
                rover.postX -= 1;
            }
            break;
        case rover.direction = "W":
            if (rover.postX === 9) {
                console.log("Rover is at border,cannot move forward in this direction!")
            } else {
                rover.postX += 1;
            }
            break;
    }
    obstacleAhead(rover);
};

// check for obstacle or other rover when moving forward or backward//
function obstacleAhead(rover) {
    if (grid[rover.postY][rover.postX] === 'x') {
        console.log("Obstacle ahead, cannot move!")
        var length = rover.travelLog.length;
        rover.postX = rover.travelLog[length - 1][0];
        rover.postY = rover.travelLog[length - 1][1];
    } else if (roverA.postX == roverB.postX && roverA.postY == roverB.postY) {
        console.log("Cannot move, rover A & rover B will collide!");
        var length = rover.travelLog.length;
        rover.postX = rover.travelLog[length - 1][0];
        rover.postY = rover.travelLog[length - 1][1];
    } else if (roverA.postX == roverC.postX && roverA.postY == roverC.postY) {
        console.log("Cannot move, rover A & rover C will collide!");
        var length = rover.travelLog.length;
        rover.postX = rover.travelLog[length - 1][0];
        rover.postY = rover.travelLog[length - 1][1];
    } else if (roverB.postX == roverC.postX && roverB.postY == roverC.postY) {
        console.log("Cannot move, rover B & rover C will collide!");
        var length = rover.travelLog.length;
        rover.postX = rover.travelLog[length - 1][0];
        rover.postY = rover.travelLog[length - 1][1];
    } else { console.log("Current position:" + rover.postX + "," + rover.postY) }
}

function moveRover(rover) {
    var command = prompt("Please give your command for Rover " + rover.name + "!");
    for (var k = 0; k < command.length; k++) {
        switch (command[k]) {
            case 'f':
                moveForward(rover);
                break;
            case 'b':
                moveBackward(rover);
                break;
            case 'r':
                turnRight(rover);
                break;
            case 'l':
                turnLeft(rover);
                break;
            default:
                console.log('Unknown command, only allowed: "f", "b", "r", "l"');
        }
    }
    console.log(rover.travelLog);
}