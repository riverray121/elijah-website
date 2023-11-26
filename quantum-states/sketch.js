/* sketch.js
// Adapted from: https://github.com/codegiovanni/Gravity
*/
let particles = [];
const G = 0.2;
const M = 10e7;
let WIDTH, HEIGHT, CENTER;

class Particle {
    constructor(x, y) {
        this.g = G;
        this.mass = 2;
        this.x = x;
        this.y = y;
        this.momentum_x = 500;
        this.momentum_y = 500;
        this.dt = 0.001;
    }

    move() {
        let dx = CENTER.x - this.x;
        let dy = CENTER.y - this.y;
        let hyp = dx * dx + dy * dy;
        let theta = Math.atan2(dy, dx);
        let force = (this.g * this.mass * M) / hyp;
        let force_x = force * Math.cos(theta);
        let force_y = force * Math.sin(theta);
        this.momentum_x += force_x * this.dt;
        this.momentum_y += force_y * this.dt;
        this.x += this.momentum_x / this.mass * this.dt;
        this.y += this.momentum_y / this.mass * this.dt;
    }
}

// function setup() {
//     WIDTH = windowWidth;
//     HEIGHT = windowHeight;
//     CENTER = { x: WIDTH / 2, y: HEIGHT / 2 };
//     createCanvas(WIDTH, HEIGHT);
    
//     let centerX = windowWidth / 2;
//     let centerY = windowHeight / 2;
//     let squareSize = min(windowWidth, windowHeight) / 2; // Adjust the square size based on the window size

//     for (let i = 0; i < 5000; i++) {
//         let x = random(centerX - squareSize / 2, centerX + squareSize / 2);
//         let y = random(centerY - squareSize / 2, centerY + squareSize / 2);
//         particles.push(new Particle(x, y));
//     }
// }

// function setup() {
//     WIDTH = windowWidth;
//     HEIGHT = windowHeight;
//     CENTER = { x: WIDTH / 2, y: HEIGHT / 2 };
//     createCanvas(WIDTH, HEIGHT);

//     let r = 200; // Radius of the circle
//     for (let i = 0; i < 1000; i++) {
//         let ang = random(TWO_PI); // Random angle between 0 and 2*PI
//         let hyp = sqrt(random(1)) * r; // Random radius up to r
//         let adj = cos(ang) * hyp; // x component
//         let opp = sin(ang) * hyp; // y component
//         let x = CENTER.x + adj;
//         let y = CENTER.y + opp;
//         particles.push(new Particle(x, y));
//     }
// }

function setup() {
    WIDTH = windowWidth;
    HEIGHT = windowHeight;
    CENTER = { x: WIDTH / 2, y: HEIGHT / 2 };
    createCanvas(WIDTH, HEIGHT);

    let lineLength = 500; // Length of the line
    let startY = HEIGHT / 2; // Starting y-position of the line
    for (let i = 0; i < 5000; i++) {
        let x = random(WIDTH / 2 - lineLength / 2, WIDTH / 2 + lineLength / 2);
        let y = startY;
        particles.push(new Particle(x, y));
    }
}

function draw() {
    background(0);
    fill(255);
    particles.forEach(p => {
        p.move();
        circle(p.x, p.y, 4);
    });
}
