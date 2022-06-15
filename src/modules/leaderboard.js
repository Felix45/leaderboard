import { get } from "lodash";

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

const displayBoard = (data) => {
  const board = data.reduce((prev, current) => {
   prev += `<li>${current.user} : ${current.score}</li>`;
   return prev;
  }, '');
  document.querySelector('.leaderboard').innerHTML = board;
}

async function getScores() {
  let scoreUrl = url + gameId +'/scores/';
  const scores = await fetch(scoreUrl).then((response) => response.json())
  .then(data => {
    displayBoard(data.result)
  });
}

async function addScore(user, score) {
  let scoreUrl = url + gameId +'/scores/';
  const result = await fetch(scoreUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({user, score}),
  }).then((response) => response.json())
  .then((data) => getScores() );

  return result;
}


export { getScores, addScore, displayBoard };
