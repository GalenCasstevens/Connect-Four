var board;
var boardArray;
var slots;
var col1;
var col1AvailableSlot;
var col2;
var col2AvailableSlot;
var col3;
var col3AvailableSlot;
var col4;
var col4AvailableSlot;
var col5;
var col5AvailableSlot;
var col6;
var col6AvailableSlot;
var col7;
var col7AvailableSlot;
var turn;

window.onload = init;

let init = () => {
  boardArray = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];
  board = document.getElementById('board');
  slots = document.getElementsByClassName('slot');
  col1 = document.getElementsByClassName('col1');
  col2 = document.getElementsByClassName('col2');
  col3 = document.getElementsByClassName('col3');
  col4 = document.getElementsByClassName('col4');
  col5 = document.getElementsByClassName('col5');
  col6 = document.getElementsByClassName('col6');
  col7 = document.getElementsByClassName('col7');
  col1AvailableSlot = 35;
  col2AvailableSlot = 36;
  col3AvailableSlot = 37;
  col4AvailableSlot = 38;
  col5AvailableSlot = 39;
  col6AvailableSlot = 40;
  col7AvailableSlot = 41;
  turn = 'player1';

  for (var i = 0, slot; slot = board.cells[i]; i++) {
    //iterate through slots
    //slots would be accessed using the "slot" variable assigned in the for loop
    var slotClass = slot.className;

    switch (slotClass) {
      case 'col1':
        slot.onclick = () => move(slot);
        break;
      case 'col2':
        slot.onclick = () => move(slot);
        break;
    }
  }

  for (var i = 0; i < col1.length; i++) {
    col1[i].onclick = function () {
      move('col1');
    }
  }

  for (var i = 0; i < col2.length; i++) {
    col2[i].onclick = function () {
      move('col2');
    }
  }

  for (var i = 0; i < col3.length; i++) {
    col3[i].onclick = function () {
      move('col3');
    }
  }

  for (var i = 0; i < col4.length; i++) {
    col4[i].onclick = function () {
      move('col4');
    }
  }

  for (var i = 0; i < col5.length; i++) {
    col5[i].onclick = function () {
      move('col5');
    }
  }

  for (var i = 0; i < col6.length; i++) {
    col6[i].onclick = function () {
      move('col6');
    }
  }

  for (var i = 0; i < col7.length; i++) {
    col7[i].onclick = function () {
      move('col7');
    }
  }
  /*
    for(var i = 0; i < col2.length; i++) {
      col2[i].children[0].onclick = function() {
          move('col2');
      }
    }
  */

  let startGame = () => {
    for (var i = 0, slot; slot = board.cells[i]; i++) {
      //iterate through slots
      //slots would be accessed using the "slot" variable assigned in the for loop
      var column = slot.className;
      slot.onclick = () => move(column)
    }
  };

  let move = (column) => {
    if (turn === 'player1') {
      
    }
  }

  function move(column) {
    if (column === 'col1' && col1AvailableSlot >= 0) {
      col1Move();
    } else if (column === 'col2' && col2AvailableSlot >= 1) {
      col2Move();
    } else if (column === 'col3' && col3AvailableSlot >= 2) {
      col3Move();
    } else if (column === 'col4' && col4AvailableSlot >= 3) {
      col4Move();
    } else if (column === 'col5' && col5AvailableSlot >= 4) {
      col5Move();
    } else if (column === 'col6' && col6AvailableSlot >= 5) {
      col6Move();
    } else if (column === 'col7' && col7AvailableSlot >= 6) {
      col7Move();
    }
  }

  function col1Move() {
    if (turn === 'player1') {
      slots[col1AvailableSlot].classList.add('player1');
    } else if (turn === 'player2') {
      slots[col1AvailableSlot].classList.add('player2');
    }
    col1AvailableSlot -= 7;
    changeTurn();
  }

  function col2Move() {
    if (turn === 'player1') {
      slots[col2AvailableSlot].classList.add('player1');
    } else if (turn === 'player2') {
      slots[col2AvailableSlot].classList.add('player2');
    }
    col2AvailableSlot -= 7;
    changeTurn();
  }

  function col3Move() {
    if (turn === 'player1') {
      slots[col3AvailableSlot].classList.add('player1');
    } else if (turn === 'player2') {
      slots[col3AvailableSlot].classList.add('player2');
    }
    col3AvailableSlot -= 7;
    changeTurn();
  }

  function col4Move() {
    if (turn === 'player1') {
      slots[col4AvailableSlot].classList.add('player1');
    } else if (turn === 'player2') {
      slots[col4AvailableSlot].classList.add('player2');
    }
    col4AvailableSlot -= 7;
    changeTurn();
  }

  function col5Move() {
    if (turn === 'player1') {
      slots[col5AvailableSlot].classList.add('player1');
    } else if (turn === 'player2') {
      slots[col5AvailableSlot].classList.add('player2');
    }
    col5AvailableSlot -= 7;
    changeTurn();
  }

  function col6Move() {
    if (turn === 'player1') {
      slots[col6AvailableSlot].classList.add('player1');
    } else if (turn === 'player2') {
      slots[col6AvailableSlot].classList.add('player2');
    }
    col6AvailableSlot -= 7;
    changeTurn();
  }

  function col7Move() {
    if (turn === 'player1') {
      slots[col7AvailableSlot].classList.add('player1');
    } else if (turn === 'player2') {
      slots[col7AvailableSlot].classList.add('player2');
    }
    col7AvailableSlot -= 7;
    changeTurn();
  }

  function changeTurn() {
    if (turn === 'player1') {
      turn = 'player2';
    } else if (turn === 'player2') {
      turn = 'player1';
    }
  }
};
