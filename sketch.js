function setup() {
  createCanvas(600,600);
}

function draw() 
{
  background("black");

  if (keyDown("V")){

    background ("red");
  }

  if (keyDown("A")){

    background ("blue");
  }

  if (keyDown("B")){

    background ("white");
  }

  if (keyDown("R")){

    background ("purple");
  }

  if (keyDown("R" && "S")){

    background ("pink");
  }

  if (keyDown("P")){

    background ("black");
  }
  
  fill ("brown")
  text ("Clique na letras e veja oque acontece! (Cores disponiveis: V,A,B,R, R + S)",50,200);
  


}




