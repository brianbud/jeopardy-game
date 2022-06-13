//initialize game board on page
initializeCategoryRow();
initializeBoard();

function initializeCategoryRow() {
  let catRow = document.getElementById('category-row');

  for (let i = 0; i < 6; i++) {
    let box = document.createElement('div');
    box.className = 'clue-box category-box';
    catRow.appendChild(box);
  }
}

function initializeBoard() {
  let board = document.getElementById('clue-board');

  //generate 5 rows, then 6 boxes under each row
  for (let i = 0; i < 5; i++) {
    let row = document.createElement('div');
    let boxValue = 200 * (i + 1);
    row.className = 'clue-row';

    for (let j = 0; j < 6; j++) {
      let box = document.createElement('div');
      box.className = 'clue-box';
      box.textContent = '$' + boxValue;
      box.addEventListener('click', getClue, false);
      row.appendChild(box);
    }

    board.appendChild(row);
  }
}

function randomInt() {
  return Math.floor(Math.random() * 18418 + 1);
}

function buildCategories() {
  const fetchRequest1 = fetch(
    `https://jservice.io/api/category?&id=${randomInt()}`
  ).then((response) => response.json());

  const fetchRequest2 = fetch(
    `https://jservice.io/api/category?&id=${randomInt()}`
  ).then((response) => response.json());

  const fetchRequest3 = fetch(
    `https://jservice.io/api/category?&id=${randomInt()}`
  ).then((response) => response.json());

  const fetchRequest4 = fetch(
    `https://jservice.io/api/category?&id=${randomInt()}`
  ).then((response) => response.json());

  const fetchRequest5 = fetch(
    `https://jservice.io/api/category?&id=${randomInt()}`
  ).then((response) => response.json());

  const fetchRequest6 = fetch(
    `https://jservice.io/api/category?&id=${randomInt()}`
  ).then((response) => response.json());

  const allData = Promise.all([
    fetchRequest1,
    fetchRequest2,
    fetchRequest3,
    fetchRequest4,
    fetchRequest5,
    fetchRequest6,
  ]);

  allData.then((response) => {
    console.log(response);
  });
}

function getClue() {
  console.log('just for testing');
}
