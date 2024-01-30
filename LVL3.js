function lvl3(){

	enemy2HP = 100
	enemy = 3
	// HPcheck()
	ballSpe = 4
	mode = 9
	fightButton.show()
	fightButton.style('background-color' ,'green')
	quitButton.show()
	startButton.hide()
	background(100)
	fill('blue')
	rect(0,0, width/2, height)
	fill(	255, 165, 0)
	rect(width/2,0, width/2, height)
	fill(255)
	textSize(20)
	noStroke()
	text(playerHP, width/4+50, height/2)
	text(enemy3HP,(width - (width/4) - 50) , height/2)
	image(player, 0 + (width/4) + 50, height/2-50, 150,150)
	image(enemy3, (width - (width/4) - 50), height/2 - 50, 150, 150)
	textSize(50)
	strokeWeight(3)
	stroke(0)
	textAlign(CENTER, TOP)
	textFont('Courier New')
	text('LEVEL 3', width/2, 46)
}

function lvl3Damaged(){
	mode = 10
	// HPcheck()
	loop()
	fightButton.hide()
	damageButton.hide()
	quitButton.hide()
	startButton.hide()
	background(100)
	fill('blue')
	rect(0,0, width/2, height)
	fill(	255, 165, 0)
	rect(width/2,0, width/2, height)
	image(player, 0 + (width/4) + 50, height/2-50, 150,150)
	image(enemy3hurt, (width - (width/4) - 50), height/2 - 50, 150, 150)
	fill(255)
	text(playerHP, width/4+50, height/2)
	text(enemy3HP,(width - (width/4) - 50) , height/2)
	fill(233, 116, 81)
	damages = str(damage)
	damagess = str(50-damage)
	textAlign(CENTER, TOP)
	textFont('Verdana')
	strokeWeight(0)
	textSize(20)
	text('You did ' + damages + ' damage to RobotFina.net, while RobotFina.net did ' + damagess + ' damage to you', width/2, 50)
	fill(255)
	timer(9)
	
}

function lvl3Dead(){
	mode = 11
	fightButton.hide()
	damageButton.hide()
	quitButton.hide()
	startButton.hide()
	againButton.show()
	restartButton.hide()
	background(173, 216, 230)
	textSize(50)
	image(player, 0 + (width/4) + 50, height/2-50, 150,150)
	image(enemy3dead, (width - (width/4) - 50), height/2 - 50, 150, 150)
	fill(233, 116, 81)
	textAlign(CENTER, TOP)
	textFont('Courier New')
	text('Congratulations, You have Completed', width/2,0)
	textSize(20)
	timer(13)
	if(speed == 1){
		breakIT = true
		text('your time was ' + min + ':' + sec + '.' + millisec, width/2, height/2+250 )
	}
}