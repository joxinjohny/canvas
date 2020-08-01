var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.beginPath();
c.moveTo(0, canvas.height / 2);

for(let i = 0; i < canvas.width; i++) {
    c.lineTo(i, canvas.height / 2 + Math.sin(i * 0.01) * 100);
}

c.stroke();

















/* 

const colors = [
    '#01579B',
    '#40C4FF',
    '#00B0FF',
    '#0091EA'
];

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};


function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.03;
    this.distanceFromCenter = randomFromRange(50, 120);
    this.lastMouse = {x: x, y: y};

    this.draw = lastPoint => {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
    }

    this.update = function(e) {
        const lastPoint = {x: this.x, y:this.y};

        //Move points over time
        this.radians  += this.velocity;

        // Drag Effect
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(lastPoint);
    }
}

let particles = [];

function init() {
    particles = [];
    
    for( var i = 0; i < 100; i++) {
        const radius = (Math.random() * 2) + 1
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(255, 255, 255, 0.2)';
    c.fillRect(0, 0, innerWidth, innerHeight);

    particles.forEach(particle => {
        particle.update();
    });

}

init();
animate();



//Utility Functions

function randomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}



// Event Listners

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

addEventListener('mousemove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}); */