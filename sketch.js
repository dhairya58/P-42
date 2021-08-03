var bg, issimg, scimg, scimg1, scimg2, scimg3;
var iss
var spaceCraft
var hasDocked = false

function preload() {
  bg = loadImage("images/spacebg.jpg")
  issimg = loadImage("images/iss.png")
  scimg = loadImage("images/spacecraft1.png")
  scimg1 = loadImage("images/spacecraft2.png")
  scimg2 = loadImage("images/spacecraft3.png")
  scimg3 = loadImage("images/spacecraft4.png")


}

function setup() {
  createCanvas(800, 400);
  iss = createSprite(330, 130, 20, 20);
  iss.addImage(issimg)
  iss.scale = 0.25

  spaceCraft = createSprite(285, 240, 20, 20)
  spaceCraft.addImage(scimg)
  spaceCraft.scale = 0.15

}

function draw() {
  background(bg);

  if (!hasDocked) {
    spaceCraft.x = spaceCraft.x + random(-1, 1)

    if (keyDown(UP_ARROW)) {
      spaceCraft.y = spaceCraft.y - 2
    }

    if (keyDown(DOWN_ARROW)) {
      spaceCraft.addImage(scimg1)
    }

    if (keyDown(LEFT_ARROW)) {
      spaceCraft.addImage(scimg3)
      spaceCraft.x = spaceCraft.x - 2
    }

    if (keyDown(RIGHT_ARROW)) {
      spaceCraft.addImage(scimg2)
      spaceCraft.x = spaceCraft.x + 2
    }
  }


  if (spaceCraft.y <= (iss.y + 70) && spaceCraft.x <= (iss.x - 10)) {

    hasDocked=true;
    textSize(25)
    fill("white")
    text("Docking Successfull",200,300)
  }




  drawSprites();


}
