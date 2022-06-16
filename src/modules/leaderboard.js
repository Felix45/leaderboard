class LeaderBoard {
  constructor() {
    this.gameId = 'Y5PURJEgHZgvF0sESt7W';
    this.alertBox = document.querySelector('.alert');
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  createGame = async () => {
    await fetch(LeaderBoard.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Space shooters' }),
    }).then((response) => response.json()).then((data) => data);
  }

  displayBoard = async (data) => {
    const board = data.reduce((prev, current) => {
      prev += `<li><span>${current.user}</span> <span>${current.score}</span></li>`;
      return prev;
    }, '');
    document.querySelector('.leaderboard').innerHTML = board;
  };

  getScores = async () => {
    const scoreUrl = `${this.url + this.gameId}/scores/`;
    await fetch(scoreUrl).then((response) => response.json())
      .then((data) => {
        this.displayBoard(data.result);
      });
  }

  addScore = async (user, score) => {
    const scoreUrl = `${this.url + this.gameId}/scores/`;
    await fetch(scoreUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    }).then((response) => response.json())
      .then((data) => {
        this.getScores();
        this.alertBox.innerHTML = data.result;
        this.alertBox.classList.toggle('d-none');
      });

    setTimeout(() => {
      this.alertBox.classList.toggle('d-none');
    }, 2000);
  }
}

export default LeaderBoard;
