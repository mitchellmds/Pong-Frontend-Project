var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var width = width;
var height = height;
canvas.width = 400;
canvas.height = 800;

var Paddles = function(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};

var Player = function() {
	this.paddle = new Paddles(100,10,150,5);
};

var Computer = function() {
	this.paddle = new Paddles(100,785,150,5);
};

var Ball = function(x,y){
	this.x = x;
	this.y = y;
	this.radius = 5;
};

Paddles.prototype.render = function(){
	c.fillStyle = '#eee';
	c.fillRect(this.x, this.y, this.width, this.height);
};

Player.prototype.render = function(){
	this.paddle.render();
}

Computer.prototype.render = function(){
	this.paddle.render();
}

Ball.prototype.render = function() {
	c.beginPath();
	c.arc(this.x, this.y, this.radius, 2 * Math.PI);
	c.fillStyle = '#eee';
	c.fill();
}

var render = function() {
	c.fillStyle = '#eee';
	c.fillRect(0,0, width, height);
	Player.render();
	Computer.render();
	Ball.render();
};

window.onload = function() {
  render();
}
