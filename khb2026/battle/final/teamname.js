const redteam = document.getElementById('redteam');
redteam.textContent =  teamnamefin1[0][0];
const whiteteam = document.getElementById('whiteteam');
whiteteam.textContent = teamnamefin2[0][0];
fetch('../js/kendai.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('kendai').textContent = data.dai4[1];
  });
const gameid = document.getElementById('gameid');
gameid.textContent = "決勝戦";
