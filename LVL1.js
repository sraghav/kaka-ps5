// make speedrun mode

function lvl1(){
	
	enemy = 1
	mode = 2
	ballSpe = 1
	// HPcheck()
	fightButton.show()
	fightButton.style('background-color', color(255))
	quitButton.show()
	startButton.hide()
	background(100)
	fill(255,0,0)
	rect(0,0, width/2, height)
	fill(0,0,255)
	rect(width/2,0, width/2, height)
	image(player, (width/4) + 50, height/2-50, 150,150)
	image(enemy1, (width - (width/4) - 50), height/2 - 50, 150, 150)
	fill(255)
	textSize(20)
	noStroke()
	strokeWeight(0)
	text(playerHP, width/4+50, height/2)
	text(enemy1HP,(width - (width/4) - 50) , height/2)
	textSize(50)
	stroke(0)
	strokeWeight(3)
	textAlign(CENTER, CENTER)
	textFont('Courier New')
	text('LEVEL 1', width/2, 60)
}

function lvl1Damaged(){
	// HPcheck()
	loop()
	fightButton.hide()
	damageButton.hide()
	quitButton.hide()
	startButton.hide()
	background(100)
	fill(255,0,0)
	rect(0,0, width/2, height)
	fill(0,0,255)
	rect(width/2,0, width/2, height)
	image(player, 0 + (width/4) + 50, height/2-50, 150,150)
	image(enemy1damage, (width - (width/4) - 50), height/2 - 50, 150, 150)
	fill('rgb(0,0,0)')
	damages = str(damage)
	damagess = str(50-damage)
	textFont('Verdana')
	strokeWeight(0)
	textAlign(CENTER, TOP)
	textSize(20)
	text('You did ' + damages + ' damage to RobotProto.net, while RobotProto.net did ' + damagess + ' damage to you', width/2 , 50)
	fill(255)
	timer(2)
	
}

function lvl1Dead(){
	// enemy2HP = 150
	mode = 6
	fightButton.hide()
	damageButton.hide()
	quitButton.hide()
	startButton.hide()
	background(173, 216, 230)
	textSize(50)
	image(player, 0 + (width/4) + 50, height/2-50, 150,150)
	image(enemy1dead, (width - (width/4) - 50), height/2 - 50, 150, 150)
	fill('purple')
	textAlign(CENTER, CENTER)
	textFont('Courier New')
	text('Congratulations, One Less to Poison The World', width/2, 150)
	textSize(20)
	timer(4)
}
