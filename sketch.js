const OBJECT_SIZE = 500
const SIDES = 6

var PALETTE = []

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, SVG)
  colorMode(HSB, 360, 100, 100)
  
  PALETTE = [
    color(330, 90, 90), // pink
    color(210, 80, 50), // blue
  ]

  angleMode(DEGREES)
  noLoop()
}

function draw() {
  background(0,.1);
  strokeWeight(1)
  noFill()

  //testLines()
  //outlineShape()
  //simpleLines()
  //circles()

  var picker = random(1)
  if (picker > .3) {
    outlineShape()
  }

  picker = random(1)
  if (picker > .3) {
    simpleLines()
  }

  picker = random(1)
  if (picker > .3){
    circles()
  }


}

function circles () {
  var numShapes = SIDES
  var angle = 360 / numShapes 
  var shapeSize = (OBJECT_SIZE / 2) * .93
  var sColor = getRandomFromPalette()
  var position = (OBJECT_SIZE / 2) - (shapeSize / 2)

  stroke(sColor)
  strokeWeight(1)
  push()
    translate(width/2, height/2)
    for (var i = 0; i < numShapes; i++){
      ellipse(position, 0, shapeSize, shapeSize)
      rotate(angle)
    }
  pop()

}


function simpleLines () {
  var stepsOut = 8
  var numSteps = randomSelectTwo ? stepsOut : floor(stepsOut * 1.25)
  var step = (OBJECT_SIZE / 2) / numSteps
  var start = floor(random(0, numSteps))
  var stop = floor(random(start, numSteps+1))

  console.log(start)
  console.log(stop)
  var numShapes = randomSelectTwo() ? SIDES : SIDES * 2 // ternary operator
  var sColor = getRandomFromPalette()
  var sWeight = randomSelectTwo() ? 1 : 3

  var angle = 360 / numShapes

  push()
    translate(width/2, height/2)
    stroke(sColor)
    strokeWeight(sWeight)
    for (var i = 0; i < numShapes; i++){
      line(start * step, 0, stop * step, 0)
      rotate(angle)
    }
  pop()
}


function outlineShape () {
  var sColor = getRandomFromPalette()
  var sWeight = randomSelectTwo() ? 1 : 3
  var hexagonTrue = randomSelectTwo()

  stroke(sColor)
  strokeWeight(sWeight)
  push()
    translate(width/2, height/2)
    if (hexagonTrue) {
      hexagon(0, 0, OBJECT_SIZE/2)
    } else {
    ellipse(0, 0, OBJECT_SIZE, OBJECT_SIZE)
    }
  pop()
}


function testLines () {
  
  /* if (randomSelectTwo()) {
    numShapes = SIDES
  } else {
    numShapes = SIDES * 2
  } */ 

  var numShapes = randomSelectTwo() ? SIDES : SIDES * 2 // ternary operator
  var sColor = getRandomFromPalette()

  push()
    translate(width/2, height/2)
    stroke(PALETTE[1])
    ellipse(0, 0, OBJECT_SIZE, OBJECT_SIZE)

    stroke(sColor)
    var angle = 360 / numShapes
    for (var i = 0; i < numShapes; i++){
      line(0,0, OBJECT_SIZE/2, 0)
      rotate(angle)
    }
  pop()

}
