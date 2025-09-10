function setSafeHTML(el, html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  tmp.querySelectorAll("script,iframe,object,link,style").forEach((node) =>
    node.remove()
  );
  el.innerHTML = tmp.innerHTML;
}

setSafeHTML(teamname, teamname6[0][0]);

setSafeHTML(k1_1, teamname6[1][1]);
setSafeHTML(k1_3, teamname6[1][3]);
setSafeHTML(k1_5, teamname6[1][5]);

setSafeHTML(k2_1, teamname6[2][1]);
setSafeHTML(k2_3, teamname6[2][3]);
setSafeHTML(k2_5, teamname6[2][5]);

setSafeHTML(k3_1, teamname6[3][1]);
setSafeHTML(k3_3, teamname6[3][3]);
setSafeHTML(k3_5, teamname6[3][5]);

setSafeHTML(k4_1, teamname6[4][1]);
setSafeHTML(k4_2, teamname6[4][2]);
setSafeHTML(k4_3, teamname6[4][3]);
setSafeHTML(k4_4, teamname6[4][4]);
setSafeHTML(k4_5, teamname6[4][5]);

