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
  if ( (buffer.toString().includes(".")) && value == "." ) {
  } else {
    return buffer += value;
  }
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

function sizeIsOk(number) {
  return number.length < 13 || number.length === undefined
}

function resetError(targetElementId) {
  document.getElementById(targetElementId).innerHTML = "ERROR"
  resetAll();
}

function showResult(targetElementId) {
  if (sizeIsOk(operatingBuffer)) {
    document.getElementById(targetElementId).innerHTML = +operatingBuffer;
  } else {
    resetError(targetElementId);
  }
}

function showBuffer(targetElementId) {
  if (sizeIsOk(buffer)) {
    document.getElementById(targetElementId).innerHTML = +buffer;
  } else {
    resetError(targetElementId);
  }
}
