let redShown = false;
let whiteShown = false;

function showRed() {
  if (!redShown) {
    redShown = true;
    left.textContent = teamnamefin1[4][2];//[1]が兼題１、[1]が先鋒句を意味する
    btnA.style.display = "none";
  }
}

function showWhite() {
  if (!whiteShown) {
    whiteShown = true;
    right.innerHTML = sanitizeHTML(teamnamefin2[4][2]);
    btnB.style.display = "none";
  }
}
btnA.addEventListener('click', showRed);
btnB.addEventListener('click', showWhite);

const matchid = document.getElementById('matchid');
matchid.textContent = "次鋒戦";