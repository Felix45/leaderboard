const scores = [];
const gameId = '77Dk40FTlaYbEU2kfdMk';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

async function createGame() {
   const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: 'Space shooters'}),
   }).then((response) => response.json()).then((data) => console.log(data));
}

async function getScores() {
  let scoreUrl = url + gameId +'/scores/';
  const scores = await fetch(scoreUrl).then((response) => response.json());
  console.log(scores);
}
getScores();

async function addScore(user, score) {
  let scoreUrl = url + gameId +'/scores/';
  const result = await fetch(scoreUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({user, score}),
  }).then((response) => response.json());
}

const displayBoard = (scores) => {
  const board = scores.reduce((prev, current) => {
    prev += `<li>${current.name} ${current.score}</li>`;
    return prev;
  }, '');
  return board;
}

export { getScores, addScore, displayBoard };
