function txt(){
	stroke(0)
	for(i=0;i<51;i++){
		let t = random(1,50)
		t = round(t)
		txtarray.push(t)	
	}
	let p = 1;
	for(let i=0;i<width;i+=width/50){
		fill(255)
		textSize(20)
		textAlign(CENTER,CENTER)
		text(txtarray[p],i+12,height/2)
		p++
		}	
}

function stopwatch(){
if(breakIT == true){
	noLoop()
}
else{
	loop()
}
speed = 1

	if(millis() - nanosec >= 1000){
		millisec++
		nanosec = 0
			if(millisec == 100){
				sec++
				millisec = 0
					if(sec == 60){
						min++
						sec = 0
					}
			}
	}
	else{
		nanosec+=6
	}
textSize(50)
stroke(0)
strokeWeight(3)
fill(0)
textAlign(CENTER,TOP)
textFont('Courier New')
text(min + ':' + sec + '.' + millisec, 100, 20)
}

function timer(x){
	
	if(tt < millis()){
		mode = x
	}
	else{}
}

function preload(){
	player = loadImage('player.gif')	
	enemy1 = loadImage('azucena-lopez-robot02-movemment.gif')
	enemy1damage = loadImage('azucena-lopez-checkpointanimation-g.gif')
	enemy1dead = loadImage('azucena-lopez-robotdead01animation-g.gif')
	enemy2 = loadImage('lvl2.gif')
	enemy2hurt = loadImage('lvl2_damaged.gif')
	enemy2dead = loadImage('lvl2_dead.gif')
	enemy3 = loadImage('lvl3.gif')
	enemy3hurt = loadImage('lvl3_hurt.gif')
	enemy3dead = loadImage('lvl3_dead.gif')
}

function HPcheck(){
	if(playerHP <= 0){
		mode = 12;
	}
	if(enemy1HP <= 0){
		mode = 6;
	}
	if(enemy2HP <= 0){
		mode = 8;
	}
	if(enemy3HP <= 0){
		mode = 11;
	}
}