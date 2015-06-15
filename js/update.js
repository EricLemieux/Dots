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
  sprite.body.position.x += gBoatSpeed;

  //If the boat reaches the limit of the screen
  if(sprite.position.x <= 0 || sprite.position.x >= 400){
    collision();
  }

  game.physics.arcade.collide(sprite, rock, collision, null, this);
}

function collision(){
  //Boat explodes or something and display the players score or something
  restart();
}
