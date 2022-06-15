import './style.css';
import LeaderBoard from './modules/leaderboard.js';

const refreshBtn = document.querySelector('.refresh');
const addForm = document.forms[0];

const leaderBoard = new LeaderBoard();
leaderBoard.getScores();

refreshBtn.addEventListener('click', leaderBoard.getScores);

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  leaderBoard.addScore(addForm.user.value, addForm.score.value);
  addForm.reset();
});
