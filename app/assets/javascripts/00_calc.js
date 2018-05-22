//---- VARIABLES --------------------------------------------------------------------------------------------------------------------------------------------------------------------

let buffer = 0                                                              //-------- Stockera temporairement la valeur à additionner, soustraire, etc.
let operatingBuffer = 0                                                     //-------- Stockera le résultat des opérations
let actionBuffer = ""                                                       //-------- Stockera le choix de l'opération à effectuer ("add()", "substract()"...)

//---- FONCTIONS MATHS --------------------------------------------------------------------------------------------------------------------------------------------------------------

let add = function() {                                                      //-------- Additionne la valeur du buffer à celle déjà en mémoire
  return operatingBuffer += +buffer;                                        //-------- On convertit le buffer en nombre grace au "+" juste devant
}

let substract = function() {                                                //-------- Retire la valeur du buffer à celle déjà en mémoire
  return operatingBuffer -= +buffer;                                        //-------- On convertit le buffer en nombre grace au "+" juste devant
}

let multiply = function() {                                                 //-------- Multiplie la valeur du buffer à celle déjà en mémoire
  return operatingBuffer *= +buffer;                                        //-------- On convertit le buffer en nombre grace au "+" juste devant
}

let divide = function() {                                                   //-------- Divise la valeur de la mémoire par celle du buffer
  return operatingBuffer /= +buffer;                                        //-------- On convertit le buffer en nombre grace au "+" juste devant
}

//---- RESET BUFFERS ----------------------------------------------------------------------------------------------------------------------------------------------------------------

let clearBuffer = function() {                                              //-------- Réinitialise le buffer
  return buffer = 0;
}

let clearAction = function() {                                              //-------- Réinitialise l'action
  return actionBuffer = "";
}

let resetAll =  function() {                                                //-------- Réinitialise la calculatrice en entier
  clearBuffer();
  clearAction();
  return operatingBuffer = 0;

}

//---- INPUTS -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

let inputValue = function(value) {                                          //-------- On récupère la "value" du button sur lequel on a déclenché le "onclick"
  if ( (buffer.toString().includes(".")) && value == "." ) {                //-------- On évite de prendre 2 virgules dans le buffer
  } else {
    return buffer += value;                                                 //-------- Sinon on rentre la value du button clické dans le buffer
  }
}

let inputAction = function(id) {                                            //-------- On récupère l'id du button sur lequel on a déclenché le "onclick"
  if (actionBuffer != "") {                                                 //-------- S'il y a déjà un choix en mémoire, on effectue l'opération grâce à eval("nom_de_la_function");
    eval(actionBuffer);
  } else if (operatingBuffer == 0) {                                        //-------- Sinon c'est peut-être la première opération, on ajoute juste le buffer au résultat
    operatingBuffer = +buffer;
  }
  clearBuffer();                                                            //-------- Quoi qu'il arrive on reset le buffer
  return actionBuffer = id;                                                 //-------- On mémorise l'opération sur laquelle on vient de cliquer pour la réaliser plus tard
}

let inputResult = function() {                                              //-------- En cliquant sur le bouton "=" on fait la même chose que précédemment
  if (actionBuffer != "") {
    eval(actionBuffer);
  } else if (operatingBuffer == 0) {
    operatingBuffer = +buffer;
  }
  clearAction();                                                            //-------- Sauf qu'on reset aussi l'action !
  clearBuffer();
  return
}

//---- OUTPUTS -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function sizeIsOk(number) {                                                 //-------- On vérifie que la valeur soit définie ou ne dépasse pas l'écran
  return number.length < 13 || number.length === undefined
}

function resetError(targetElementId) {                                      //-------- On affiche ERROR sur l'écran
  document.getElementById(targetElementId).innerHTML = "ERROR"
  resetAll();                                                               //-------- Et on réinitialise la calculette pour la peine, c'est cadeau !
}

function showResult(targetElementId) {
  if (sizeIsOk(operatingBuffer)) {                                          //-------- Si ça dépasse pas l'écran
    document.getElementById(targetElementId).innerHTML = +operatingBuffer;  //-------- On affiche le résultat rafraîchi dans la div avec l'id "target"
  } else {
    resetError(targetElementId);                                            //-------- Sinon on balance ERROR
  }
}

function showBuffer(targetElementId) {
  if (sizeIsOk(buffer)) {                                                   //-------- Si ça dépasse pas l'écran
    document.getElementById(targetElementId).innerHTML = +buffer;           //-------- On affiche le buffer rafraîchi dans la div avec l'id "target"
  } else {
    resetError(targetElementId);                                            //-------- Sinon on balance ERROR
  }
}

//---- BRAVO, ON A DETRONE CASIO ! --------------------------------------------------------------------------------------------------------------------------------------------------
