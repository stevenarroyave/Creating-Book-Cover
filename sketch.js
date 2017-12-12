function setup() {   //Function to initialize the program
    createCanvas(700, 700);
    textAlign(CENTER, CENTER);  //function to align the text to the center
    rectMode(CENTER);  //function to change the behaviour of the rectangle, this time centering it in the canvas
    angleMode(DEGREES);   //setting the sketch to use degrees instead of radians
}

function draw() {   //Continuously executed function that creates the visuals
    background(0);      //setting background color to black

    var amount = 6;
    var spacing = 20;
    var radius = 140;

    for (var i = 0; i < amount; i++) {
            createNumberRing(radius + spacing * i, 30 + 10 * i, i);
        }

        drawTitleText();
        drawSubtitleText();
        drawWebsite();
    }

    function createNumberRing(radius, amount, seed) {
        randomSeed(seed);
        var randomNumbers = [];
        for (var i = 0; i <= amount; i++) {
            randomNumbers.push(parseInt(random(2), 10));
        }
        var spacing = 360 / amount;

        push();
        translate(width / 2, height / 2);
        var rotSpeed = 0.05;
        rotate(frameCount * random(-rotSpeed, rotSpeed));

        for (var i = 0; i < amount; i++) {
            push();
            rotate(i * spacing);
            var num = new Num(randomNumbers[i], 0 + radius, 0, 90, random(50, 255));
            num.render();
            pop();
        }

        pop();
    }


function Num(msg, x, y, rot, clr) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.msg = msg;
    this.color = clr;

    this.render = function() {
        push();            //function to isolate the setings to an individual object
        fill(this.color);
        translate(this.x, this.y);
        rotate(this.rot);   //giving a rotating value to the number object
        text(this.msg, 0, 0);
        pop();             //function to isolate the setings to an individual object
    }
}

    function drawTitleText() {

    push();      //function to isolate the setings to an individual object
    translate(width/2, height/2);   //move initial positions of the shapes to width/2 and height/2

    var scaleFactor = 0.5;      //adjusting the growth of the text
    var maxLimit = 200;           //adjusting the maximum growth of the text
    if (frameCount < maxLimit) {
        var currentScale = map(frameCount, 0, maxLimit, 0, scaleFactor);    //map function used to derive the incremental scaling value
        scale(1.5 + currentScale);
    } else {
        scale(1.5 + scaleFactor);
    }

    strokeWeight(2);    //setting the width of the stroke of the shapes
    stroke(255); //setting the color of the stroke of the shape
    fill(0, 0);  //setting the color of the shape
    rect(0, 0, 210, 30);

    fill(255);          //color of the text
    noStroke();       //stroke of the text
    textFont('Arial');        //font of the text
    text('CODING FOR VISUAL LEARNERS', 0, 0);      //text and its placement
    pop();    //function to isolate the setings to an individual object ((alongside with push ()  ))
}

function drawSubtitleText() {
    push();

    translate(width/2, height/2 + 50);
    scale(1.3);

    push();
    fill('#ed225d');
    textFont('Arial');
    var msg = 'Learning JavaScript with p5.js';
    text(msg, 0, 0);
    pop();

    pop();
}

function drawWebsite() {
    push();

    translate(width/2, height * 0.95);
    scale(1.2);

    push();

    textFont('Verdana');
    var msg = 'Johan Steven Ospina Arroyave';
    fill('#fff');
    textSize(12);
    text(msg, 0, 0);
    pop();

    pop();
}
