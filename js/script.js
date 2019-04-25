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
  var board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
  slots = document.getElementsByClassName('slot');
  col1 = document.getElementsByClassName('col1');
  turn = 'player1';
/*
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
*/

  for(var i = 0; i < col1.length; i++) {
    col1[i].children[0].onclick = function() {
        move('col1');
    }
  }
/*
  for(var i = 0; i < col1.length; i++) {
    col1[i].onclick = function() {
        move('col1');
    }
  }
*/
  for(var i = 0; i < col2.length; i++) {
    col2[i].children[0].onclick = function() {
        move('col2');
    }
  }
/*
  for(var i = 0; i < col2.length; i++) {
    col2[i].onclick = function() {
        move('col2');
    }
  }
*/
  function move(column) {
    if(turn === 'player1' && column === 'col1') {
      slots[35].classList.add('player1');
    } else if(turn === 'player2' && column === 'col1') {
      slots[28].classList.add('player2');
    }

    if(turn === 'player1') {
      turn = 'player2';
    } else if(turn === 'player2') {
      turn = 'player1';
    }
  }
}
