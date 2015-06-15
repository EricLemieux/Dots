function restart(){
  //Reset the boat to the starting position
  sprite.body.position.setTo(200, 450);

  if(Math.random() >= 0.5){
    sprite.angle = 15;
    gBoatSpeed = 0.75;
  }else{
    sprite.angle = -15;
    gBoatSpeed = -0.75;
  }

  //Reset some global variables
  canPaddle = true;

  rock.body.position.setTo(300,50);
}
