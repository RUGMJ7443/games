function switchGame(game) {
    var ul = document.getElementById("gamesList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Loading..."));
  ul.appendChild(li);
  li.classList.add("info");
    location.href = `${game}`;
}