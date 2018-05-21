//------ Blabla
let trucDeFou = "miam"

//---- VARIABLES ----------------------------------------------

let buffer = 0
let operatingBuffer = 0
let actionBuffer = ""

//---- FONCTIONS MATHS ----------------------------------------

let add = function() {
  return operatingBuffer += +buffer;
}

let substract = function() {
  return operatingBuffer -= +buffer;
}

let multiply = function() {
  return operatingBuffer *= +buffer;
}

let divide = function() {
  return operatingBuffer /= +buffer;
}

//---- RESET BUFFERS ----------------------------------------

let clearBuffer = function() {
  return buffer = 0;
}

let clearAction = function() {
  return actionBuffer = "";
}

let resetAll =  function() {
  clearBuffer();
  clearAction();
  return operatingBuffer = 0;

}

//---- INPUTS -----------------------------------------------

let inputValue = function(value) {
  return buffer += value;
}

let inputAction = function(id) {
  if (actionBuffer != "") {
    eval(actionBuffer);
  } else {
    operatingBuffer += +buffer;
  }
  clearBuffer();
  return actionBuffer = id;
}

let inputResult = function() {
  if (actionBuffer != "") {
    eval(actionBuffer);
  } else {
    operatingBuffer += +buffer;
  }
  clearAction();
  clearBuffer();
  return
}

//---- OUTPUTS -----------------------------------------------

function showResult(targetElementId) {
  document.getElementById(targetElementId).innerHTML = operatingBuffer;
}

function showBuffer(targetElementId) {
  document.getElementById(targetElementId).innerHTML = buffer;
}
