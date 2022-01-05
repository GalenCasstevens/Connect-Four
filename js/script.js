
let init = () => {
  var board = document.getElementById('board');
  var boardArray = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];
  var turn = 'player1';

  let startGame = () => {
    for (var i = 0, row; row = board.rows[i]; i++) {
      //iterate through rows
      //rows would be accessed using the "row" variable assigned in the for loop
      for (var j = 0, col; col = row.cells[j]; j++) {
        //iterate through columns
        //columns would be accessed using the "col" variable assigned in the for loop
        var column = j + 1;
        col.onclick = () => move(column);
      }  
   }
  };

  let move = (column) => {
    for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
      // var slotIsAvailable = (boardArray[rowIndex][column] === 0);
      if (boardArray[rowIndex][column] === 0 && turn === 'player1') {
        boardArray[rowIndex][column] = 1;
        break;
      } else if (boardArray[rowIndex][column] === 0 && turn === 'player2') {
        boardArray[rowIndex][column] = 2;
        break;
      }
    }
    drawBoard();
    checkWinDrawCondition();
    changeTurn();
  };

  let drawBoard = () => {
    for (let i = 0; i < boardArray.length; i++) {
      var rowLength = boardArray[i].length;
      for (let j = 0; j < rowLength; j++) {
        var boardCell = board.rows[i].cells[j];
        console.log(`boardCell: ${boardCell}`);
        boardCell.className = '';
        boardCell.classList.add('slot');
        switch (boardArray[i][j]) {
          case 0:
            boardCell.classList.add('empty');
            break;
          case 1:
            boardCell.classList.add('player1');
            break;
          case 2:
            boardCell.classList.add('player2');
            break;
          default:
            console.log('Error occured!');
        }
      }
    }
  };

  let changeTurn = () => {
    if (turn === 'player1') turn = 'player2';
    else if (turn === 'player2') turn = 'player1';
  };

  let checkWinDrawCondition = () => {

  };

  startGame();
};

window.onload = init;