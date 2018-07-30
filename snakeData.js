
var cvs , ctx,f,snake,score,box,cvsA,timer,activePlayer,name1,name2;
name1='player 1'
name2='player 2'
activePlayer=0
var timer = {
  handle: 0,
  start: function() {
      this.stop();
      this.handle = setInterval(drawS,100);
  },
  stop: function() {
      if (this.handle) {
          clearTimeout(this.handle);
          this.handle = 0;
      }
  }
};

score=[0,0]
cvs = document.querySelector('#myCanvas')
ctx = cvs.getContext('2d')
box = 10
cvsA={
  w:cvs.width,
  h:cvs.height
}
snake=[]
snake [0]={
  x:9*box,
  y:10*box
}
var food = {
  x : Math.floor(Math.random()*49) * box,
  y : Math.floor(Math.random()*49) * box
}
function drawS(){
ctx.clearRect(0,0,cvsA.w,cvsA.h)
for(i = 0; i < snake.length ; i++){
  ctx.fillStyle = ( i == 0 )? "yellow" : "green";
  ctx.fillRect(snake[i].x,snake[i].y,box,box);
  
  ctx.strokeStyle = "black";
  ctx.strokeRect(snake[i].x,snake[i].y,box,box);
}
//food
ctx.fillStyle = 'red'
ctx.fillRect(food.x,food.y,box,box)

var snakeX = snake[0].x;
var snakeY = snake[0].y;

if( f == "left") snakeX -= box;
if( f == "up") snakeY -= box;
if( f == "right") snakeX += box;
if( f == "down") snakeY += box;

if(snakeX == food.x && snakeY == food.y){
  score[activePlayer]+=10;
  food = {
      x : Math.floor(Math.random()*49) * box,
      y : Math.floor(Math.random()*49) * box
  }
}else{
   snake.pop();
}

var newHead = {
  x : snakeX,
  y : snakeY
}
snake.unshift(newHead)

document.querySelector('.score1').textContent = 'score '+name1+' : '+ score[0]
document.querySelector('.score2').textContent = 'score '+name2+' : '+ score[1]
whw()
/////////////////////////////////////
//lose option
if(newHead.x>49*box||newHead.y>49*box||newHead.x<0*box||newHead.y<0*box||wh(newHead,snake)){
  //clearInterval()
  timer.stop()
 
  
}
function wh(head,array){
  for(i = 1; i < array.length; i++){
      if(head.x == array[i].x && head.y == array[i].y){
          return true;
      }
  }
  return false;
}
/////////////////////////////////////
}
//var game =setInterval(drawS,100);
timer.start()
function newG(){
  snake=[]
snake [0]={
  x:9*box,
  y:10*box
}
score[0] =0
score[1] =0
f=0
food = {
  x : Math.floor(Math.random()*49) * box,
  y : Math.floor(Math.random()*49) * box
}
document.querySelector('#winner').textContent = ''
  timer.start()
}
//////////////////////////////////////
//controller
function direction(event){
  
    var key = event.keyCode;
    console.log(key)
    if( key == 52  && f != "right"){
        f = "left";
    }else if(key == 56 && f != "down"){
        f = "up";
        }else if(key == 54 && f != "left"){
        f = "right";
        }else if(key == 50&& f != "up"){
        f = "down";
        }
    }
    document.addEventListener('keypress',direction)
    //////////////////////////////////////////
    function hold() {
      NextPlayer();
      newP()
    }
    function NextPlayer(){ 
      f=0
      activePlayer === 0 ? activePlayer=1 : activePlayer=0
    }
    function newP(){
      snake=[]
      snake [0]={
        x:9*box,
        y:10*box
      }
      food = {
        x : Math.floor(Math.random()*49) * box,
        y : Math.floor(Math.random()*49) * box
      }
        timer.start()
    }
    function whw(){
      if(score[0]>score[1]){
      document.querySelector('#winner').textContent = 'winner is ' +name1
      }else if(score[1]>score[0]){
      document.querySelector('#winner').textContent = 'winner is ' +name2
        }
    }
    function sub() {
      name1 = document.querySelector('#p1').value
      name2 = document.querySelector('#p2').value
    }
    