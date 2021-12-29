var boy,bgimg,boyimg,track,trackImg,coin,coinImg,coingroup
function preload(){
bgimg=loadImage("bg.jpg")
trackImg=loadImage("track.jpg")
boyimg=loadAnimation("Runner-1.png","Runner-2.png")
coinImg=loadImage("coin.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
//bg=createSprite(windowWidth, windowHeight);
//bg.addImage("track",bgimg)
track=createSprite(windowWidth/2, windowHeight);
track.addImage("track",trackImg)
track.velocityY=1

boy=createSprite(500,500,50,50);
boy.addAnimation("naitikrunner",boyimg)
boy.scale=0.15

}

function draw() {
 background (0)
 console.log(boy.x)
 if(track.y>400){
    track.y=track.height/8
    }


if(keyDown("LEFT_ARROW")){
    boy.x=boy.x-3
}


if(keyDown("RIGHT_ARROW")){
    boy.x=boy.x+3
}
if(boy.x<50){
boy.x=250
boy.y=450

}
sprwncoins()
 drawSprites()



}



function sprwncoins(){
if(frameCount%240===0){

var coin=createSprite(Math.round(random(800,1100),200))

coin.addImage(coinImg)

coin.scale=0.08
coin.velocityY=3
}


}