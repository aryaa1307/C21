//function defination
function istouching(mr,fr)
{
  if(mr.x-fr.x<=(mr.width/2+fr.width/2)&&fr.x-mr.x<=(mr.width/2+fr.width/2)&&mr.y-fr.y<=(mr.height/2+fr.height/2)&&fr.y-mr.y<=(mr.height/2+fr.height/2))
  {
    return true;
  }
  else 
  {
    false;  }

}

function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 
}