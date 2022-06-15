import './style.css';
import { addScore, getScores } from './modules/leaderboard.js';

const refreshBtn = document.querySelector('.refresh');
const addForm = document.forms[0];

getScores();

refreshBtn.addEventListener('click', getScores);

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addScore(addForm.user.value, addForm.score.value);
  addForm.reset();
});
