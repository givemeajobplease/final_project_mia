var namespace = "http://www.w3.org/2000/svg"
var cheese = 1
// Write your code here!
//hide all variables except HUB


//for stamp
function changecolorSTAMP(){
    document.querySelector("body").setAttribute("style", "background-color: lightgreen;")
}
var namespace = "http://www.w3.org/2000/svg"
 var STAMPcanvas = document.getElementById("STAMPcanvasID")
var STAMPblackclick = "false"
var STAMPredclick = "true"
var STAMPimage = "http://www.pngmart.com/files/3/Shrek-PNG-HD.png"
var mousedown = false
var STAMPheight = 100
var STAMPwidth = 100
function STAMPdownclick(){
  mousedown = true
}
function STAMPupclick(){
  mousedown = false
}
function STAMPshowCoords(event) {
  if (mousedown == true){
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
   var img = makeImage("STAMPcanvasID", STAMPimage, x, y, STAMPwidth, STAMPheight, 1)
  }
}
function STAMPreload(){
  location.reload();
}
function  shrek(){
STAMPimage = "http://www.pngmart.com/files/3/Shrek-PNG-HD.png"
}
function  cage(){
STAMPimage = "https://mysocallednetflix.files.wordpress.com/2014/06/nick.png"
}
function  dk(){
STAMPimage = "http://vignette3.wikia.nocookie.net/p__/images/9/97/DKISWii.png/revision/latest?cb=20140820022031&path-prefix=protagonist"
}
function  bond(){
STAMPimage = "http://i1.kym-cdn.com/photos/images/original/000/677/034/0f7.gif"
}
function plums(){
  STAMPimage = "https://media.tenor.co/images/1f8594fc9eb6352bd4284b6439179e04/raw"
}
function tinyhands(){
  STAMPimage = "https://m.popkey.co/66c6cc/MwxN3_s-200x150.gif"
}
function  white(){
paint = "white"
}
function  STAMPminussize(){
STAMPwidth = STAMPwidth-13
STAMPheight = STAMPheight-13
}
function  STAMPplussize(){
STAMPwidth = STAMPwidth+13
STAMPheight = STAMPheight+13
}

//for game
function changecolorGAME(){
    document.querySelector("body").setAttribute("style", "background-color: black;")
}
var namespace = "http://www.w3.org/2000/svg"
 var GAMEcanvas = document.getElementById("GAMEcanvasID")
var ob1 = makeRect("GAMEcanvasID", 100, 170, 30, 70, "#3D3D3D", 1)
var ob2 = makeRect("GAMEcanvasID", 30, 0, 30, 70, "#3D3D3D", 1)
var ob3 = makeRect("GAMEcanvasID", 220, 130, 30, 100, "#3D3D3D", 1)
var ob4 = makeRect("GAMEcanvasID", 250, 0, 30, 50, "#3D3D3D", 1)
var ob5 = makeRect("GAMEcanvasID", 150, 0, 30, 90, "#3D3D3D", 1)
var startscreen = makeRect("GAMEcanvasID", 0,0,1500,600, "black", 1)
var turnedoff = "false"

  var chara = makeImage("GAMEcanvasID", "http://www.clipartbest.com/cliparts/pT5/6o6/pT56o6M8c.gif", 0, 170, 30, 30, 1)
  chara.setAttribute("display", "none")
  document.getElementById("directions").setAttribute("style", "display: inline;")
document.getElementById("endbutton").setAttribute("style", "display: none;")
document.getElementById("gameover").setAttribute("style", "display: none;")
function starttime(){
  startscreen.setAttribute("fill", "none")
  mainloop()
}
  
function mainloop(){
  var timerepeated = 1
chara.setAttribute("display", "inline")
document.getElementById("title").setAttribute("style", "display: none;")
  document.getElementById("directions").setAttribute("style", "display: none;")
var ob1x = getX(ob1)
var ob2x = getX(ob2)
var ob3x = getX(ob3)
var ob4x = getX(ob4)
var ob5x = getX(ob5)
var charactery = getY(chara)
  document.getElementById("startbutton").setAttribute("style", "display: none;")
  move(ob1, -3, 0)
  move(ob2, -3, 0)
  move(ob3, -3, 0)
  move(ob4, -3, 0)
  move(ob5, -3, 0)
  
  if (ob1x < -30){
    setX(ob1, 350)
    updateScore()
  }
  if (ob2x < -30){
    setX(ob2, 350)
    updateScore()
  }
  if (ob3x < -30){
    setX(ob3, 350)
    updateScore()
  }
  if (ob4x < -30){
    setX(ob4, 350)
    updateScore()
  }
  if (ob5x < -30){
    setX(ob5, 350)
    updateScore()
  }
  if (charactery > 0){
    setTimeout(function(){ move(chara, 0,.5); }, 1000);
  }else{
    
  }
  if (collides(chara, ob1)){
   turnoff()
  }
    if (collides(chara, ob2)){
    turnoff()
  }
    if (collides(chara, ob3)){
    turnoff()
  }
    if (collides(chara, ob4)){
    turnoff()
  }
    if (collides(chara, ob5)){
   turnoff()
  }
  
  requestAnimationFrame(mainloop)
}

addEventListener("keydown", jump)

function jump(event) {
 if (event.key == "w") {
   move(chara, 0, -15)
 }
}
function turnoff(){
  startscreen.setAttribute("style", "fill: red;")
document.getElementById("endbutton").setAttribute("style", "display: inline;")
document.getElementById("gameover").setAttribute("style", "display: inline;")
 chara.setAttribute("opacity", "0")
  // text settings
  if (score < 10){
scoreLabel.setAttribute("x", "148")
  }
    else if (score < 100){
scoreLabel.setAttribute("x", "140")
  }
  else if (score < 1000){
scoreLabel.setAttribute("x", "135")
  }
scoreLabel.setAttribute("y", "70")
document.getElementById("scorelabel").setAttribute("style", "display: none;")
  
  //variable
  turnedoff = "true"
}
var scoreLabel = makeText("GAMEcanvasID", "0", 60, 32, 30, "VT323", "black", 1)
var score = 0

function updateScore() { 
  if (turnedoff == "false"){
  score = score + 1
  scoreLabel.innerHTML = score
  }
}
function  resetgame(){
  location.reload()
}





//for dots
function changecolorDOTS(){
    document.querySelector("body").setAttribute("style", "background-color: lightpink;")
}
var namespace = "http://www.w3.org/2000/svg"
 var DOTScanvas = document.getElementById("DOTScanvasID")
var blackclick = "false"
var redclick = "true"
var DOTSpaint = "red"
var DOTSradius = 15
var mousedown = false
function downclick(){
  mousedown = true
}
function upclick(){
  mousedown = false
}
function showCoords(event) {
  if (mousedown == true){
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
   var redcircle = makeCircle("DOTScanvasID", x, y, DOTSradius, DOTSpaint)
    redcircle.setAttribute("id", "redcircle")
  }
}
function reload(){
  location.reload();
}
function  changetoblack(){
DOTSpaint = "black"
}
function  changetored(){
DOTSpaint = "red"
}
function  changetogreen(){
DOTSpaint = "green"
}
function  changetotan(){
DOTSpaint = "tan"
}
function  changetoblue(){
DOTSpaint = "blue"
}
function  changetobrown(){
DOTSpaint = "#973310"
}
function  white(){
DOTSpaint = "white"
}
function  minusr(){
DOTSradius = DOTSradius-13
}
function  plusr(){
DOTSradius = DOTSradius+13
}





// !!!!!!!
// Don't edit the code below this line!
// !!!!!!!
function makeCircle(canvasID, cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById(canvasID)
  canvas.appendChild(circle)
  return circle
}

function makeRect(canvasID, x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById(canvasID)
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(canvasID, cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById(canvasID)
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(canvasID, x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById(canvasID)
  canvas.appendChild(line)
  return line
}

function makePolyline(canvasID, points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById(canvasID)
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(canvasID, points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(canvasID)
  return polygon
}

function makeImage(canvasID, url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById(canvasID)
  canvas.appendChild(image)
  return image
}



























// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("x")) {
      return parseFloat(shape.getAttribute("x"))
    } else if (shape.hasAttribute("cx")) {
      return parseFloat(shape.getAttribute("cx"))
    }  else if (shape.hasAttribute("x1")) {
      return parseFloat(shape.getAttribute("x1"))
    }
  } catch(err) {
    throw "You're trying to get the x coordinate of something that isn't a shape!"
  }
}

function getY(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("y")) {
      return parseFloat(shape.getAttribute("y"))
    } else if (shape.hasAttribute("cy")) {
      return parseFloat(shape.getAttribute("cy"))
    } else if (shape.hasAttribute("y1")) {
      return parseFloat(shape.getAttribute("y1"))
    }
  } catch (err) {
    throw "You're trying to get the y coordinate of something that isn't a shape!"
  }
}

function setX(shape, x) {
  if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  } 
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}




function makeEllipse(canvasID, cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById(canvasID)
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(canvasID, x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById(canvasID)
  canvas.appendChild(line)
  return line
}

function makePolyline(canvasID, points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById(canvasID)
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(canvasID, points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(canvasID)
  return polygon
}

function makeText(canvasID, message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById(canvasID)
  canvas.appendChild(text)
  return text
}

function makeImage(canvasID, url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById(canvasID)
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  
  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin && 
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}
