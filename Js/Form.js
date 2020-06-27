class Form {
  constructor(){
    //Create elements
      this.enter1 = createElement("h3", "Enter Your Name");
      this.enter2 = createElement("h3", "Enter Your School Name");
      this.enter3 = createElement("h3", "Enter your Class and your Age");
      this.info = createElement("h3", "Press Right arrow and Left arrow to move ");
    // create button 
      this.button = createButton("PLAY"); 
      this.reset = createButton('Reset');
    // create greeting
     this.greeting = createElement("h3");  
    // create inputs 
      this.input = createInput();
      this.class = createInput();
      this.school = createInput();
     
  }

  hide(){
    // Hide them
    this.greeting.hide();
    this.class.hide();
    this.input.hide();
    this.school.hide();
    this.button.hide();
    this.enter1.hide();
    this.enter2.hide();
    this.enter3.hide();

  }

  display(){
    // Make title for Your Game
      var title = createElement("h1");// make variable
      title.html("Hurdle Game");// give title
      title.position(100,5);// give position of title
      
    // give positions to all elements , Button (Play and Reset) and inputs
      this.enter1.position(550,100);
      this.enter2.position(550,200);
      this.enter3.position(550,300);
      this.school.position(550,250);
      this.input.position(550,150);   
      this.class.position(550,350);     
      this.button.position(600,500);
      this.reset.position(displayWidth-100,20);

    // Make function Mouse pressed 
    // it will show that when you press the button then what should be the result
      this.button.mousePressed(()=>{
        this.school.hide();
        this.enter2.hide();
        this.class.hide();
        this.enter3.hide();
        this.enter1.hide();
        this.input.hide();
        this.button.hide();
        // give information 
        player.school = this.school.value();
        player.name = this.input.value();
        player.class = this.class.value();
          playerCount+=1;
          player.index = playerCount;
          // Update player and playerCount
          player.update();
          player.updateCount(playerCount);
          // Give greeting to the player
         this.greeting.html("Welcome " + player.name + " Ready To Play !!!!!");// give the greeting in ("______").
         this.greeting.position(530,160);// Position of greeting
      })
    // Make function Mouse Pressed for reset button
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  }
}
