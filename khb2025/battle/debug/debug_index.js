function setSafeHTML(el, html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  tmp.querySelectorAll("script,iframe,object,link,style").forEach((node) =>
    node.remove()
  );
  el.innerHTML = tmp.innerHTML;
}

setSafeHTML(TEAM1, teamname1[0][0]);
setSafeHTML(TEAM2, teamname2[0][0]);
setSafeHTML(TEAM3, teamname3[0][0]);
setSafeHTML(TEAM4, teamname4[0][0]);
setSafeHTML(TEAM5, teamname5[0][0]);
setSafeHTML(TEAM6, teamname6[0][0]);

