let txtarray = []
let playerHP = 100;
let enemy1HP = 100;
let enemy2HP = 150;
let enemy3HP = 200;
let moveSpe = 1;
let xPos = 900;
let mazeWall;
let enemy1;
let player;
let enemy2;
let enemy3;
let mode = 1;
let startButton; 
let fightButton;
let quitButton;
let restartButton;
let col;
let damage = 0;
let damageButton;
let tt;
let speedrun;
let enemy = 1;
let ballSpe;
let breakIT = false;
let hr = 0;
let min = 0;
let sec = 0;
let millisec = 0;
let nanosec = 0;
let speed = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke()
	col = color(255,204,0)
	sec1 = second()
	
	speedrun = createCheckbox()
	speedrun.position(width-100,20)
	speedrun.size(10)
	
	restartButton = createButton('Redemption')
	restartButton.position(width/2-250, height/2-10)
	restartButton.size(500, 1)
	restartButton.style('color:red')
	restartButton.style('border-color', 'black')
	restartButton.style('background-color', 'black')
	restartButton.style('font-size:50px')
	restartButton.mousePressed(restart)
	
	damageButton = createButton('Deal Damage')
	damageButton.position(width/2-75, height/2+100)
	damageButton.style('background-color:rgb(135,135,135)')
	damageButton.style('border-color', '')
	damageButton.mousePressed(winFactor)
	damageButton.size(150,20)
	
	startButton = createButton('Begin Your Journey')
	startButton.position(width/2-100, height/2+50)
	startButton.size(250,0)
	startButton.style('color:blue')
	startButton.style('background-color', col)
	startButton.style('border-color', col)
	startButton.style('font-size', '20px')
	
	fightButton = createButton('Attack')
	fightButton.position(width/2 - 75, height/2 + 100)
	fightButton.style('border-color', 'purple')
	fightButton.removeAttribute('shadow')
	fightButton.mousePressed(fightScene)
	fightButton.size(150,20)
	
	againButton = createButton('Begin Once More')
	againButton.position(width/2 - 75, height/2 + 100)
	againButton.style('border-color', 'purple')
	againButton.removeAttribute('shadow')
	againButton.mousePressed(startScene)
	againButton.size(150,20)
	
	quitButton = createButton('Break Free')
	quitButton.position(12342, 1243241)
	quitButton.style('background-color', color(255))
	quitButton.style('border-color', 'purple')
	quitButton.removeAttribute('shadow')
	quitButton.mousePressed(quitScreen)
	quitButton.size(150,20)
	
	startButton.hide()
	fightButton.hide()
	quitButton.hide()
	damageButton.hide()
	restartButton.hide()
	
	txt()
	fill(255)
	
}

function winFactor(){
	let m = 0;
	tt  = millis() +2000
	let xy = 0;
	let yx = width/50;
	for(i=0;i<51;i++){
		if(xPos>xy && xPos<yx){
			if(enemy == 1){
				mode = 5
			}
			if(enemy == 2){
				mode = 7
			}
			if(enemy == 3){
				mode = 10
			}
		}
		else{
			m++
			xy+= width/50
			yx+=width/50
		}
	}
	damage = int(txtarray[m])
	if(enemy == 1){
	enemy1HP -= damage
	}
	if(enemy == 2){
	enemy2HP -= damage
	}
	if(enemy == 3){
	enemy3HP -= damage
	}
	
	playerHP -= (50-damage)
	HPcheck()
	txtarray.splice(0,50)
}

function restart(){
	mode = 1
}

function roul(){
	let r = 1
	let xd=0
	stroke(0)
	for(let i=0;i<width;i+=width/50){
			
		if (r % 2 == 0){
				fill(255,0,0)
			}
			if(r % 2 != 0){
				fill(0,0,0)	
			}
			r++
		rect(xd,height/2-50,width/50,100)
		xd += width/50
		
	}
}

function ball(){
	for(i=0;i<width;i+=100){
		fill(255)
		stroke(0)
		if(xPos < 0 || xPos > width){
				ballSpe *= -1
		}
		xPos += ballSpe
		circle(xPos,height/2,15)
	}
}

function draw() {

	if(mode == 1){
		startScene()	
	}
	else if(mode == 2){
		lvl1()	
	}
	else if(mode == 3){
	fightScene()
	
	}
	else if(mode == 4){
		lvl2()
	}
	else if(mode == 5){
		lvl1Damaged()
	}
	else if(mode == 6){
		lvl1Dead()
	}
	else if(mode == 7){
		lvl2Damaged()
	}
	else if(mode == 8){
		lvl2Dead()
	}
	else if(mode == 9){
		lvl3()
	}
	else if(mode == 10){
		lvl3Damaged()
	}
	else if(mode == 11){
		lvl3Dead()
	}
	else if(mode == 12){
		quitScreen()
	}
	else if(mode == 13){
		//win screen
	}
	if(speedrun.checked()){
	stopwatch()
	}
	textAlign(RIGHT,TOP)
	fill(0)
	noStroke()
	textFont('Verdana')
	textSize(20)
	text('Speedrun Mode', width-100, 20)
}