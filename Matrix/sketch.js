/**
 * A Matrix animation!
 * @Author Afaq Anwar
 * @Version 06/18/2019
 */

var chars = ['a', 'F', 'A', 'q', 'I', 's', 'L', 'e', '@', 'r', 'N', 'i', 'n', 'G'];
var amountOfChars = 125;
var canvasWidth = 1920;
var canvasHeight = 1080;

var spawnedChars = [];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(24);
    background(0);
}

function draw() {
    initiateList();
    for (var i = 0; i < spawnedChars.length; i++) {
        var currentObj = spawnedChars[i];
        fill(0, 255, 0, currentObj.fill);
        text(currentObj.letter, currentObj.xPos, currentObj.yPos);
    }
    updateLocation();
}

// Initializes a list of objects with randomly selected letters.
function initiateList() {
    while (spawnedChars.length < amountOfChars) {
        var currentChar = chars[Math.floor(Math.random() * chars.length)];
        var xPos = Math.floor(Math.random() * canvasWidth - 10);
        var yPos = 10;

        var letterObj = {
            letter: currentChar,
            xPos: xPos,
            yPos: yPos,
            fill: 1
        };

        spawnedChars.push(letterObj);
    }
}

// Updates the screen with the current spawned characters in a new position.
function updateLocation() {
    for (var i = 0; i < spawnedChars.length; i++) {
        var currentObj = spawnedChars[Math.floor(Math.random() * spawnedChars.length)];
        if (currentObj.yPos < canvasHeight) {
            currentObj.yPos += 10;
            currentObj.fill += 1;
            currentObj.letter = chars[Math.floor(Math.random() * chars.length)];
            fill(0, 255, 0, currentObj.fill);
            text(currentObj.letter, currentObj.xPos, currentObj.yPos);
        }
    }
}