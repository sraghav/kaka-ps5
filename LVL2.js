// make speedrun mode

function lvl2(){
	enemy1HP = 100
	enemy = 2
	// HPcheck()
	ballSpe = 2
	mode = 4
	fightButton.show()
	fightButton.style('background-color' ,'green')
	quitButton.show()
	startButton.hide()
	background(100)
	fill(255,0,0)
	rect(0,0, width/2, height)
	fill('yellow')
	rect(width/2,0, width/2, height)
	image(player, 0 + (width/4) + 50, height/2-50, 150,150)
	image(enemy2, (width - (width/4) - 50), height/2 - 50, 150, 150)
	fill(0)
	textSize(20)
	noStroke()
	text(enemy2HP,(width - (width/4) - 50) , height/2)
	text(playerHP, width/4+50, height/2)
	textSize(50)
	stroke(0)
	strokeWeight(3)
	textAlign(CENTER, TOP)
	textFont('Courier New')
	text('LEVEL 2', width/2, 60)
}

function lvl2Damaged(){
	mode = 7
	// HPcheck()
	loop()
	fightButton.hide()
	damageButton.hide()
	quitButton.hide()
	startButton.hide()
	background(100)
	fill('blue')
	rect(0,0, width/2, height)
	fill('yellow')
	rect(width/2,0, width/2, height)
	image(player, 0 + (width/4) + 50, height/2-50, 150,150)
	image(enemy2hurt, (width - (width/4) - 50), height/2 - 50, 150, 150)
	fill(255)
	text(playerHP, width/4+50, height/2)
	text(enemy2HP,(width - (width/4) - 50) , height/2)
	fill('green')
	damages = str(damage)
	damagess = str(50-damage)
	textAlign(CENTER, TOP)
	textFont('Verdana')
	strokeWeight(0)
	textSize(20)
	text('You did ' + damages + ' damage to RobotTetre.net, while RobotTetre.net did ' + damagess + ' damage to you', width/2, 50)
	fill(255)
	timer(4)
	
}

function lvl2Dead(){
	mode = 8
	fightButton.hide()
	damageButton.hide()
	quitButton.hide()
	startButton.hide()
	background(173, 216, 230)
	textSize(50)
	image(player, 0 + (width/4) + 50, height/2-50, 150,150)
	image(enemy2dead, (width - (width/4) - 50), height/2 - 50, 150, 150)
	fill('green')
	textAlign(CENTER, CENTER)
	textFont('Courier New')
	text('Congratulations, Just One Left ', width/2, 150)
	textSize(20)
	timer(9)
}
