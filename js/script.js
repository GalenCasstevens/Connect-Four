var slots;
var col1;
var col2;
var col3;
var col4;
var col5;
var col6;
var col7;
var turn;

window.onload = init;

function init() {
  slots = document.getElementsByClassName('slot');
  col1 = document.getElementsByClassName('col1');

  for(var i = 0; i < col1.length; i++) {
    col1[i].children[0].onclick = function(eventObj) {
      var slot = eventObj.target;
      slot.classList.add('player1');
    }
  }

  for(var i = 0; i < col1.length; i++) {
    col1[i].onclick = function(eventObj) {
        var slot = eventObj.target;
        slot.children[0].classList.add('player1');
    }
  }


}
