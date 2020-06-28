class Game {
  constructor(){

  }

  getState(){
    // Give the information in database
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
// make start function 
  // it will wait for all players to login 
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
// Make sprites of Cars (car1 , car2 , car3)
    // add the image in sprites
    car1 = createSprite(100,100,60,60);
    car1.addImage("c", c1Img);
    car2 = createSprite(200,100,60,60);
    car2.addImage("c", c2Img);
    car3 = createSprite(300,100,60,60);
    car3.addImage("c", c3Img);
    cars = [car1, car2, car3];
  }
// make play function 
  play(){
    // Hide the form 
    form.hide();
    
    // Give informations of players
    Player.getPlayerInfo();
    
    // give the informations of cars to the player
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      
      // Give color to the background
      background(rgb(200,135,103));
      
      // Give image to the background 
      background(track , 0,-displayWidth*4,displayHeight, displayWidth*5 );

      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y = 0;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
      //use data form the database to display the cars in y direction
        y = y + 150;
        cars[index-1].y = y;

        //position the cars a little away from each other in x direction
        x = allPlayers[plr].distance;        
        cars[index-1].x = x;
        
        // Create the sprities for hurdles 
        hurdle1 = createSprite(300, y, 50, 50);
        hurdle1.shapeColor = "white";

        hurdle2 = createSprite(800, y, 50, 50);
        hurdle2.shapeColor = "white";
 
        // By this statement car will go up side
        if(keyIsDown(UP_ARROW)){  
          cars[index-1].y-=60;
        }
        // Collide the car with hurdles 
        // When car collide the hurdles it will go to its original position (starting point)
        if(cars[index-1].collide(hurdle1) || cars[index-1].collide(hurdle2)){    
          if(cars[index-1].y%150===0){    
            player.distance = 0;
            player.update();
          }
        }

        // it will help the player to recognise that which car will belongs to him
        // it will show a red circle at the car position
        if (index === player.index){   
        stroke(10);
        fill("red");
        ellipse(x,y,80,80);     
          cars[index - 1].shapeColor = "red";
          camera.position.x = cars[index-1].x;
          camera.position.y = displayHeight/2;
        }
      }
    }
// by this statement it will move right side
    if(keyIsDown(RIGHT_ARROW)&& player.index !== null){
      Player.getPlayerInfo();
      console.log(player.distance);
      player.distance +=10
      player.update();
    }
// it will give the position and rank to the database
    // it will show you your rank and game state ended
    if(player.distance >= 1270){
      // Player rank will increaes
      player.rank = player.rank+1;
    Player.updateCarsAtEnd(player.rank);
      textSize(24);
      textStyle("bold");
      fill(255);
      text("Congratulations " + player.name + " !!", 1350,450);
      text("You have reached the finish line!", 1350, 480);
      text("Thanks For Playing " + player.name +" :) " , 1350, 530);
      gameState = 2;
      console.log(player.rank);
      text("Your rank :" + player.rank ,1350,400);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    
  }
}
