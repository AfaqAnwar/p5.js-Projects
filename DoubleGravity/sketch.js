/**
 * Whacky Double Gravity Physics.
 * Gravity is present on the X & Y Axis.
 * @Author Afaq Anwar
 * @Version 06/21/2019
 */

var canvasWidth = 1440;
var canvasHeight = 900;

var maxWidth = 50;
var maxHeight = 100;
var maxRectangles = 5;
var rectangles = [];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(0);
    for (i = 0; i < maxRectangles; i++) {
        xPos = Math.floor(Math.random() * canvasWidth);
        yPos = Math.floor(Math.random() * canvasHeight);
        width = Math.floor(Math.random() * maxWidth);
        height = Math.floor(Math.random() * maxHeight);
        rectangles.push(new whackyRect(xPos, yPos, width, height));
    }
}

function draw() {
    console.log(rectangles.length);
    rectangles.forEach(element => {
        element.move();
        element.display();
    });
}

// Object Oriented Javascript!
class whackyRect {
    constructor(xPos, yPos, width, height) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.gravity = 0.05;
        this.speed = 3;
        // Initializes the momentum of the x direction randomly.
        this.xSpeed = random(-3, 3);
        this.xGravity = random(-0.05, 0.05);
        this.color = color(random(255), random(255), random(255));
    }

    move() {
        this.yPos += this.speed;
        this.xPos += this.xSpeed;
        this.speed = this.speed + this.gravity;
        this.xSpeed = this.xSpeed + this.xGravity;
        if (this.xPos <= 0) {
            this.color = color(random(255), random(255), random(255));
            this.xSpeed += Math.abs(this.speed);
        }
        if (this.yPos <= 0) {
            this.color = color(random(255), random(255), random(255));
            this.speed += Math.abs(this.speed);
        } 
        if (this.xPos >= canvasWidth) {
            this.color = color(random(255), random(255), random(255));
            this.xSpeed =- this.xSpeed;
        }
        if (this.yPos >= canvasHeight) {
            this.color = color(random(255), random(255), random(255));
            this.speed =- this.speed;
        }
    }

    display() {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);
    }
}