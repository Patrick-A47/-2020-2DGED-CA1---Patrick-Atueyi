window.addEventListener("load", loadGame);

var keysDown = {}; //new Array();

/**var soundManager = null;
soundManager = new SoundManager(cueArray);

const cueArray = [
    
    new AudioCue("gameMusic9", 0.6, 1, true, 0),
  ];

**/

window.addEventListener("keydown", function (evt) {
    //  console.log(evt.key);
    keysDown[evt.key] = true;
});


window.addEventListener("keyup", function (evt) {
    // console.log(evt.key);
    delete keysDown[evt.key];
});

//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//game variables
var ball, playerPaddle;
var ballSpeed = 5;
var hitColorA = "red",
    hitColorB = "black";
var hitColor = hitColorA;
var paddleMoveSpeed = 10;

var lives = 1;
var score = 0;

let height = 75;
let width = 15;
let margin = 25;

var brick1;
var brick2;
var brick3;
var brick4;
var brick5;
var brick6;
var brick7;
var brick8;
var brick9;
var brick10;
var brick11;
var brick12;


function demos() {
    /** DEMO **/
    try {
        var x = GDUtilities.getRandomInRangeExcl(1, 10, [2, 3, 4]);
    } catch (err) {
        console.log(err);
    }
}

function loadGame() {

    

    //add game primitive
    initializeGame();

    //start update/draw cycle
    window.requestAnimationFrame(animate);
}

function initializeControls() 
{
    playerPaddle = new Rect(new Vector2(margin, (cvs.clientHeight - height) ),new Vector2(height, width));   
}

function initializeBall() {
    ball = new Arc(100, 250, 15, 0, Math.PI * 2);
    var randomX = GDUtilities.getRandomInRangeExcl(-2, 2, [0]);
    var randomY = GDUtilities.getRandomInRange(-2, 2);
    ballVector = new Vector2(randomX, randomY);
    ballVector.normalize();
}

function initializeBricks()
{

   
          brick1 = new Rect(new Vector2(125,100), new Vector2(50,10));
          brick2 = new Rect(new Vector2(125,150), new Vector2(50,10));
          brick3 = new Rect(new Vector2(125,200), new Vector2(50,10));
          brick4 = new Rect(new Vector2(225,100), new Vector2(50,10));
          brick5 = new Rect(new Vector2(225,150), new Vector2(50,10));
          brick6 = new Rect(new Vector2(225,200), new Vector2(50,10));
          brick7 = new Rect(new Vector2(325,100), new Vector2(50,10));
          brick8 = new Rect(new Vector2(325,150), new Vector2(50,10));
          brick9 = new Rect(new Vector2(325,200), new Vector2(50,10));
          brick10 = new Rect(new Vector2(425,100), new Vector2(50,10));
          brick11 = new Rect(new Vector2(425,150), new Vector2(50,10));
          brick12 = new Rect(new Vector2(425,200), new Vector2(50,10));
      
}

function initializeGame() {
    initializeControls();
    initializeBall();
    initializeBricks();

     //play sound
 // soundManager.Play("gameMusic9");
}


function animate() {
    update();
    draw();
    window.requestAnimationFrame(animate);
}

function update() {
    checkCollisions();
    updateBall();
    updatePaddle();
    updateScore();
}

function checkCollisions() {

    //paddle collision with world 
    checkBallToWorldCollision();
    checkBallToPaddleCollision();
    checkBallToBrickCollision();
}

/**
 * World extends collision with ball
 */
function checkBallToWorldCollision() {
    if (this.ball.x >= cvs.clientWidth - this.ball.radius) {
        this.ballVector.x *= -1;
        hitColor = hitColorA;
    } else if (this.ball.x <= this.ball.radius) {
        this.ballVector.x *= -1;
        hitColor = hitColorB;
    }

    if (this.ball.y <= this.ball.radius)
        this.ballVector.y *= -1;
}
/**
 * Paddle collision with ball
 */
function checkBallToPaddleCollision() {

    var projectedBallPosition = new Vector2(this.ball.x, this.ball.y);
    //new Vector2(this.ballVector.x + this.pongBall.x,
   //     this.ballVector.y + this.pongBall.y);

    //paddle
    if(projectedBallPosition.y >= this.playerPaddle.position.y && 
        projectedBallPosition.y <= this.playerPaddle.position.y + this.playerPaddle.dimension.y &&
        projectedBallPosition.x>= this.playerPaddle.position.x && 
        projectedBallPosition.x <= this.playerPaddle.position.x + this.playerPaddle.dimension.x){
           
            
                    this.ballVector.x *= -1;
                    this.ballVector.y *= -1;
                
        }

/**
 * ball collision with brick
 */
    
   

    //remember that CD/CR is projected/predictive

    //if we detect a CD then we reverse the ballVector.x
}
function checkBallToBrickCollision()
    {
        
        if(this.ball.y>= this.brick1.position.y && 
            this.ball.y <= this.brick1.position.y + this.brick1.dimension.y &&
            this.ball.x>= this.brick1.position.x && 
            this.ball.x <= this.brick1.position.x + this.brick1.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }
        
        else if(this.ball.y>= this.brick2.position.y && 
            this.ball.y <= this.brick2.position.y + this.brick2.dimension.y &&
            this.ball.x>= this.brick2.position.x && 
            this.ball.x <= this.brick2.position.x + this.brick2.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }

        else if(this.ball.y>= this.brick3.position.y && 
            this.ball.y <= this.brick3.position.y + this.brick3.dimension.y &&
            this.ball.x>= this.brick3.position.x && 
            this.ball.x <= this.brick3.position.x + this.brick3.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }

        else if(this.ball.y>= this.brick4.position.y && 
            this.ball.y <= this.brick4.position.y + this.brick4.dimension.y &&
            this.ball.x>= this.brick4.position.x && 
            this.ball.x <= this.brick4.position.x + this.brick4.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }

        else if(this.ball.y>= this.brick5.position.y && 
            this.ball.y <= this.brick5.position.y + this.brick5.dimension.y &&
            this.ball.x>= this.brick5.position.x && 
            this.ball.x <= this.brick5.position.x + this.brick5.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }

        else if(this.ball.y>= this.brick6.position.y && 
            this.ball.y <= this.brick6.position.y + this.brick6.dimension.y &&
            this.ball.x>= this.brick6.position.x && 
            this.ball.x <= this.brick6.position.x + this.brick6.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }

        else if(this.ball.y>= this.brick7.position.y && 
            this.ball.y <= this.brick7.position.y + this.brick7.dimension.y &&
            this.ball.x>= this.brick7.position.x && 
            this.ball.x <= this.brick7.position.x + this.brick7.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }

        else if(this.ball.y>= this.brick8.position.y && 
            this.ball.y <= this.brick8.position.y + this.brick8.dimension.y &&
            this.ball.x>= this.brick8.position.x && 
            this.ball.x <= this.brick8.position.x + this.brick8.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }

        else if(this.ball.y>= this.brick9.position.y && 
            this.ball.y <= this.brick9.position.y + this.brick9.dimension.y &&
            this.ball.x>= this.brick9.position.x && 
            this.ball.x <= this.brick9.position.x + this.brick9.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }

        else if(this.ball.y>= this.brick10.position.y && 
            this.ball.y <= this.brick10.position.y + this.brick10.dimension.y &&
            this.ball.x>= this.brick10.position.x && 
            this.ball.x <= this.brick10.position.x + this.brick10.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }

        else if(this.ball.y>= this.brick11.position.y && 
            this.ball.y <= this.brick11.position.y + this.brick11.dimension.y &&
            this.ball.x>= this.brick11.position.x && 
            this.ball.x <= this.brick11.position.x + this.brick11.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }

        else if(this.ball.y>= this.brick12.position.y && 
            this.ball.y <= this.brick12.position.y + this.brick12.dimension.y &&
            this.ball.x>= this.brick12.position.x && 
            this.ball.x <= this.brick12.position.x + this.brick12.dimension.x){
        this.ballVector.x *= -1;
        this.ballVector.y *= -1;    
        score+=5;
        status= false;
        }

                  
    }

function updateBall() {
    this.ball.x += ballSpeed * ballVector.x;
    this.ball.y += ballSpeed * ballVector.y;
}

function updatePaddle() {
    var paddleMove = 0;
    for (var key in this.keysDown) {
        if (key == "a") {
            paddleMove = -paddleMoveSpeed;
        } else if (key == "d") {
            paddleMove = paddleMoveSpeed;
        }

       
        //vertical bounds check on paddle
        if (paddleMove + this.playerPaddle.position.x > 0 &&
            paddleMove + this.playerPaddle.position.x < 650 - this.playerPaddle.dimension.x) {
            this.playerPaddle.move(0, paddleMove);
        }

    }
}

function updateScore() {

    
}

function draw() {
    clearCanvas("rgb(255, 255, 241)");
    ball.draw(ctx, 2, "red", hitColor, false);
    playerPaddle.draw(ctx, 2, "blue");
    brick1.draw(ctx, 2, "red");
    brick2.draw(ctx, 2, "black");
    brick3.draw(ctx, 2, "red");
    brick4.draw(ctx, 2, "black");
    brick5.draw(ctx, 2, "red");
    brick6.draw(ctx, 2, "black");
    brick7.draw(ctx, 2, "red");
    brick8.draw(ctx, 2, "black");
    brick9.draw(ctx, 2, "red");
    brick10.draw(ctx, 2, "black");
    brick11.draw(ctx, 2, "red");
    brick12.draw(ctx, 2, "black");
    
}

function clearCanvas(color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
    ctx.restore();
}
