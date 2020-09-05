function switchGame(game) {
    var ul = document.getElementById("gamesList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Loading..."));
  ul.appendChild(li);
  li.classList.add("info");
      window.location.assign(`https://rugmj7443.github.io/games/${game}`);
}

function schoolMode() {
  $('.notSafeForSchool').remove();
};
