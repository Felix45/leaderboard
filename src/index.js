import './style.css';
import LeaderBoard from './modules/leaderboard.js';

var refreshBtn = document.querySelector('.refresh');
var addForm = document.forms[0];

var leaderBoard = new LeaderBoard();

// leaderBoard.displayScores();
leaderBoard.getScores();

refreshBtn.addEventListener('click', leaderBoard.getScores);

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  leaderBoard.addScore(addForm.user.value, addForm.score.value);
  addForm.reset();
});
