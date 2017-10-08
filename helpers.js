
function hexagon (posX, posY, radius) {                     
  const rotAngle = 360 / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle (posX, posY, radius, angle) {         
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}

function randomSelectTwo () {
  var randomNumber = random(1)
  if (randomNumber > .5) {
    return true
  } else {
    return false
  }
}

function getRandomFromPalette () {
  var randomNumber2 = floor(random(0, PALETTE.length))  
  return PALETTE[randomNumber2]
}