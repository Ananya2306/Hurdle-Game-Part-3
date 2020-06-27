class Form {
  constructor(){
      this.enter1 = createElement("h3", "Enter Your Name");
      this.enter2 = createElement("h3", "Enter Your School Name");
      this.enter3 = createElement("h3", "Enter your Class and your Age");
      this.info = createElement("h3", "Press Right arrow and Left arrow to move ");
      this.button = createButton("PLAY");
      this.greeting = createElement("h3");    
      this.reset = createButton('Reset');    
      this.input = createInput();
      this.class = createInput();
      this.school = createInput();
     
  }

  hide(){
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
      var title = createElement("h1");
      title.html("Hurdle Game");
      title.position(100,5);
      
      this.enter1.position(550,100);
      this.enter2.position(550,200);
      this.enter3.position(550,300);
      this.school.position(550,250);
      this.input.position(550,150);   
      this.class.position(550,350);     
      this.button.position(600,500);
      this.reset.position(displayWidth-100,20);

      this.button.mousePressed(()=>{
        this.school.hide();
        this.enter2.hide();
        this.class.hide();
        this.enter3.hide();
        this.enter1.hide();
        this.input.hide();
        this.button.hide();

        player.school = this.school.value();
        player.name = this.input.value();
        player.class = this.class.value();
          playerCount+=1;
          player.index = playerCount;

          player.update();
          player.updateCount(playerCount);

         this.greeting.html("Welcome " + player.name + " Ready To Play !!!!!");
         this.greeting.position(530,160);
      })

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  }
}