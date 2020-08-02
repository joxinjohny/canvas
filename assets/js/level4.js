var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = {
    x: undefined,
    y: undefined
}

var colorArray = [
    '#05F2C7',
    '#038C4C',
    '#014023',
    '#F29B30',
    '#A64B29'
];

var zoomRadius = 50;
var maxRadius = 30;

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //Interaction
        if(mouse.x - this.x < zoomRadius && mouse.x - this.x > -zoomRadius && mouse.y - this.y < zoomRadius && mouse.y - this.y > -zoomRadius) {
            if(this.radius < maxRadius) {
                this.radius += 1;
            }                            
        } else if(this.radius > this.minRadius){
            this.radius -= 1;
        }
        this.draw();
    }
}

c.fillStyle = 'rgba(' + Math.random() * Math.floor(255) + ', ' + Math.random() * Math.floor(255) + ', ' + Math.random() * Math.floor(255) + ', 0.3)';

var circleArray = [];

function init() {
    circleArray = [];
    for( var i = 0; i < 1000; i++) {
        var radius = Math.random() * 5 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 1;
        var dy = (Math.random() - 0.5) * 1;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    //c.clearRect(0, 0, innerWidth, innerHeight);
    
    c.fillStyle = 'rgba(255, 255, 255, 1)';
    c.fillRect(0, 0, innerWidth, innerHeight);
   
    for( var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}

init();
animate();


addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});
