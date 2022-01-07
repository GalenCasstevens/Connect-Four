
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
  const MIN_ROW_INDEX = 0,
    MAX_ROW_INDEX = 5,
    MIN_COLUMN_INDEX = 0,
    MAX_COLUMN_INDEX = 6;
  var turn = 'player1';

  let startGame = () => {
    $('#playerOneWins').hide();
    $('#playerTwoWins').hide();
    $('#stalemate').hide();
    for (var i = 0, row; row = board.rows[i]; i++) {
      for (var j = 0, col; col = row.cells[j]; j++) {
        let columnIndex = j;
        switch (columnIndex) {
          case 0:
            col.onclick = () => move(columnIndex);
            break;
          case 1:
            col.onclick = () => move(columnIndex);
            break;
          case 2:
            col.onclick = () => move(columnIndex);
            break;
          case 3:
            col.onclick = () => move(columnIndex);
            break;
          case 4:
            col.onclick = () => move(columnIndex);
            break;
          case 5:
            col.onclick = () => move(columnIndex);
            break;
          case 6:
            col.onclick = () => move(columnIndex);
            break;
        }
      }
    }
  };

  let move = (column) => {
    for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
      if (boardArray[rowIndex][column] === 0 && turn === 'player1') {
        boardArray[rowIndex][column] = 1;
        changeTurn();
        drawBoard();
        checkWinDrawCondition();
        break;
      } else if (boardArray[rowIndex][column] === 0 && turn === 'player2') {
        boardArray[rowIndex][column] = 2;
        changeTurn();
        drawBoard();
        checkWinDrawCondition();
        break;
      }
    }
  };

  let drawBoard = () => {
    for (let i = 0; i < boardArray.length; i++) {
      var rowLength = boardArray[i].length;
      for (let j = 0; j < rowLength; j++) {
        var boardCell = board.rows[i].cells[j].children[0];
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
    var emptySlotExists = false;
    for (let i = 0; i < boardArray.length; i++) {
      for (let j = 0; j < boardArray[i].length; j++) {
        if (boardArray[i][j] === 0) emptySlotExists = true;
        if (boardArray[i][j] === 1) {
          if ((j - 3) >= MIN_COLUMN_INDEX) {
            if (boardArray[i][j - 1] === 1 && boardArray[i][j - 2] === 1 && boardArray[i][j - 3] === 1) {
              $('#playerOneWins').show();
              return;
            }
          }
          if ((j + 3) <= MAX_COLUMN_INDEX) {
            if (boardArray[i][j + 1] === 1 && boardArray[i][j + 2] === 1 && boardArray[i][j + 3] === 1) {
              $('#playerOneWins').show();
              return;
            }
          }
          if ((j - 3) >= MIN_COLUMN_INDEX && ((i - 3) >= MIN_ROW_INDEX)) {
            if (boardArray[i - 1][j - 1] === 1 && boardArray[i - 2][j - 2] === 1 && boardArray[i - 3][j - 3] === 1) {
              $('#playerOneWins').show();
              return;
            }
          }
          if ((j + 3) <= MAX_COLUMN_INDEX && ((i + 3) <= MAX_ROW_INDEX)) {
            if (boardArray[i + 1][j + 1] === 1 && boardArray[i + 2][j + 2] === 1 && boardArray[i + 3][j + 3] === 1) {
              $('#playerOneWins').show();
              return;
            }
          }
        } else if (boardArray[i][j] == 2) {
          if ((j - 3) >= MIN_COLUMN_INDEX) {
            if (boardArray[i][j - 1] == 2 && boardArray[i][j - 2] === 2 && boardArray[i][j - 3] === 2) {
              $('#playerTwoWins').show();
              return;
            }
          }
          if ((j + 3) <= MAX_COLUMN_INDEX) {
            if (boardArray[i][j + 1] == 2 && boardArray[i][j + 2] === 2 && boardArray[i][j + 3] === 2) {
              $('#playerTwoWins').show();
              return;
            }
          }
          if ((j - 3) >= MIN_COLUMN_INDEX && ((i - 3) >= MIN_ROW_INDEX)) {
            if (boardArray[i - 1][j - 1] == 2 && boardArray[i - 2][j - 2] === 2 && boardArray[i - 3][j - 3] === 2) {
              $('#playerTwoWins').show();
              return;
            }
          }
          if ((j + 3) <= MAX_COLUMN_INDEX && ((i + 3) <= MAX_ROW_INDEX)) {
            if (boardArray[i + 1][j + 1] === 2 && boardArray[i + 2][j + 2] === 2 && boardArray[i + 3][j + 3] === 2) {
              $('#playerTwoWins').show();
              return;
            }
          }
        }
      }
    }
    if (emptySlotExists === false) $('#stalemate').show();
  };

  startGame();
};

window.onload = init;