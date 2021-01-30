var fr,mr,af,bm
function setup() 
{
  createCanvas(1200,800);
  fr=createSprite(400, 100, 50, 50);
  mr=createSprite(400,800,80,30);
  af=createSprite(500,100,40,40)
  bm=createSprite(500,100,30,40)
  af.shapeColor="red"
  bm.shapeColor="red"
  fr.shapeColor="blue"
  mr.shapeColor="blue"
  mr.velocityY=-5
  fr.velocityY=5

}

function draw() 
{
  background("pink");  
    //fr.velocityX=-5

 /* bm.y=mouseY
  bm.x=mouseX

  console.log(mr.x-fr.x);
  if(istouching(bm,af))      //function cal
  {
    bm.shapeColor="purple"
    af.shapeColor="purple"
  }
  else{
    bm.shapeColor="red"
    af.shapeColor="red"
  }*/
bounceOff(mr,fr)

  drawSprites();
}
