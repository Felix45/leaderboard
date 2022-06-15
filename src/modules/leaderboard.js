const gameId = 'Y5PURJEgHZgvF0sESt7W';
const alertBox = document.querySelector('.alert');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

async function createGame() {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Space shooters' }),
  }).then((response) => response.json()).then((data) => data);
}

const displayBoard = (data) => {
  const board = data.reduce((prev, current) => {
    prev += `<li>${current.user} : ${current.score}</li>`;
    return prev;
  }, '');
  document.querySelector('.leaderboard').innerHTML = board;
};

async function getScores() {
  const scoreUrl = `${url + gameId}/scores/`;
  await fetch(scoreUrl).then((response) => response.json())
    .then((data) => {
      displayBoard(data.result);
    });
}

async function addScore(user, score) {
  const scoreUrl = `${url + gameId}/scores/`;
  await fetch(scoreUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  }).then((response) => response.json())
    .then((data) => {
      getScores();
      alertBox.innerHTML = data.result;
      alertBox.classList.toggle('d-none');
    });

  setTimeout(() => {
    alertBox.classList.toggle('d-none');
  }, 2000);
}

export { getScores, addScore };
