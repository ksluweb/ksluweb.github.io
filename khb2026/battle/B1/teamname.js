const redteam = document.getElementById('redteam');
redteam.textContent =  teamname4[0][0];
const whiteteam = document.getElementById('whiteteam');
whiteteam.textContent = teamname5[0][0];
fetch('../js/kendai.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('kendai').textContent = data.dai1[1];
  });
const gameid = document.getElementById('gameid');
gameid.textContent = "Ｂブロック　第１試合";
