//initialize game board on page
initializeBoard();

function initializeBoard() {
  let board = document.getElementById('clue-board');

  //generate 5 rows, then 6 boxes under each row
  for (let i = 0; i < 5; i++) {
    let row = document.createElement('div');
    let boxValue = 200 * (i + 1);
    row.className = 'clue-row';
  }
}
