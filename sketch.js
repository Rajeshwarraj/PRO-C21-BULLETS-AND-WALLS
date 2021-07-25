// Creating Variables
var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);

  // Giving random values to var 
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  // Creating Sprites 
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height / 2);

  // Giving velocity 
  bullet.velocityX = speed;


  // Giving Color 
  bullet.shapecolor = color(134, 183, 90);
  wall.shapecolor = color(80, 80, 80);

}

function draw() {
  background(0, 0, 0);

  // Giving condition 
  if (collide(wall, bullet)) {
    bullet.velocityX = 0;

    // Giving local var & formula
    var damage;
    damage = (0.5 * weight * speed * speed) / (thickness ** 3);

    // if damage greater than 10
    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
      textStyle("bold");
      textSize(30);
      fill(130, 130, 255);
      text("Wall is not effective", 700, 150);
      text("Damage Done : " + Math.round(damage), 700, 200)
    }
    else
      if (damage < 10) {
        wall.shapeColor = color(0, 255, 0);
        textStyle("bold");
        textSize(30);
        fill(130, 130, 255);
        text("Wall is effective", 700, 150);
        text("Damage Done : " + Math.round(damage), 700, 200)
      }
  }
  drawSprites();
}
function collide(o1, o2) {
  if (o1.x - o2.x < (o1.width + o2.width) / 2) {
    return true;
  }
  else
    return false;

}