function setup() {
  createCanvas(windowWidth-16, windowHeight-16);

}

function draw() {
  background(220);
  fill('#ff5500');
/*  ellipse(300,height/2,100,100);
  ellipse(500,height/2,100,100);
  ellipse(mouseX,height/2,100,100);
  ellipse(width/2,height/2,100,100);*/
  for ( let y = 20 ;y < height ; y += 30 ){
      for ( let i = 20 ;i < width ; i += 30 ){
        ellipse(i, y, 20, 20);
      }
  }
}


/*let fr = 10; //starting FPS

function setup() {
  frameRate(fr);
  createCanvas(windowWidth-16, windowHeight-16);
  background(220);


}

function draw() {
  fill('#ff5500');
  //noStroke();
circle(random(width),random(height),random(10,80));


 //line(random(0,width),0, random(0,height), height);*/

}
