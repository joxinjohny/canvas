var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255, 0, 0, 0.6)';
c.fillRect(50, 50, 70, 300);
c.fillStyle = 'rgba(0, 255, 0, 0.6)';
c.fillRect(200, 150, 300, 90);
c.fillStyle = 'rgba(0, 0, 255, 0.6)';
c.fillRect(250, 50, 150, 50);

//Line
c.beginPath();
c.moveTo(125, 125);
c.lineTo(225, 235);
c.lineTo(555, 25);
c.lineTo(125, 555);
c.strokeStyle = '#ff0000';
c.stroke();

// Arc, Circle
c.beginPath();
c.arc(500, 300, 100, 0, Math.PI * 2, false);
c.stroke();


c.fillStyle = 'rgba(255, 0, 0, 0.1)';

for(var i = 0; i < 3000; i++){
    c.fillStyle = 'rgba(' + Math.random() * Math.floor(255) + ', ' + Math.random() * Math.floor(255) + ', ' + Math.random() * Math.floor(255) + ', 0.3)';
    c.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    c.beginPath();
    c.arc(Math.floor(Math.random() * Math.floor(1366)), Math.floor(Math.random() * Math.floor(650)), Math.floor(Math.random() * Math.floor(300)), 0, Math.PI * 2, false);
    c.stroke();
    c.fill();
}