window.onload = function() {


  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var width;
  var height;
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
/*
  var CreateBall = function() {
    this.ball = new Ball(200,400,10,0, 2 * Math.PI);
    context.fill();
  }
*/
  Paddles.prototype.render = function(){
  	context.fillStyle = '#84fab0';
  	context.fillRect(this.x, this.y, this.width, this.height);
  };

  Player.prototype.render = function(){
  	this.paddle.render();
  }

  Computer.prototype.render = function(){
  	this.paddle.render();
  }

  Ball.prototype.render = function() {
  	context.beginPath();
  	context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.closePath();
  	context.fillStyle = '#8fd3f4';
  	context.fill();
  }

  var player = new Player();
  var computer = new Computer();
  var ball = new Ball (200,400);


  var render = function() {
  	context.fillStyle = '#84fab0';
  	context.fillRect(0,0, width, height);
  	player.render();
  	computer.render();
  	ball.render();
  };



  render();
}
