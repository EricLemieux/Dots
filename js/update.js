function update(){
  //Input
  if(game.input.activePointer.isDown){
    if(canPaddle){
      if(game.input.activePointer.worldX > sprite.position.x){
        sprite.angle -= _turnSpeed;
        gBoatSpeed -= 0.60;
      }else{
        sprite.angle += _turnSpeed;
        gBoatSpeed += 0.60;
      }
      canPaddle = false;
    }
  }else{
    if(!canPaddle){
      canPaddle = true;
    }
  }

  //Slide the boat side to side
  sprite.position.x += gBoatSpeed;
}
