const redteam = document.getElementById('redteam');
redteam.textContent =  teamname2[0][0];
const whiteteam = document.getElementById('whiteteam');
whiteteam.textContent = teamname3[0][0];
fetch('../js/kendai.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('kendai').textContent = data.dai2[1];
  });
const gameid = document.getElementById('gameid');
gameid.textContent = "Ａブロック　第２試合";
