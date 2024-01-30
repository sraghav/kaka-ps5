function startScene(){
	breakIT = false;
 	hr = 0;
 	min = 0;
 	sec = 0;
 	millisec = 0;
 	nanosec = 0;
	speed = 0;

	mode = 1
	playerHP = 100
	enemy1HP = 100
	enemy2HP = 150
	enemy3HP = 200
	fightButton.hide()
	quitButton.hide()
	damageButton.hide()
	restartButton.hide()
	startButton.show()
	againButton.hide()
	background(255,204,0)
	fill('red')
	stroke(0,0,0)
	textSize(100)
	textAlign(CENTER, CENTER)
	textFont('Courier New')
	text('Iconic', width/2, height/2-150)
	text('Clash', width/2, height/2)
	textSize(20)
	fill(0)
	startButton.mousePressed(lvl1)
}

function quitScreen(){
	mode = 12
	background(0)
	fightButton.hide()
	quitButton.hide()
	restartButton.show()
	damageButton.hide()
	fill(255)
	textSize(75)
	textAlign(CENTER,BOTTOM)
	textFont('Courier New')
	text('THE END HAS COME', width/2,height/2-100)
	textAlign()
	textSize(20)
}

function fightScene(){
	mode = 3
	// HPcheck()
	background(100)
	
	fill(255,0,0)
	rect(0,0, width/2, height)
	fill(0,0,255)
	rect(width/2,0, width/2, height)
	
	roul()
	ball()
	txt()	

	damageButton.show()
	fightButton.hide()
	quitButton.hide()

}




	
	
	
