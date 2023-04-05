export function menu() {
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  li.innerText = "Menu";
  ul.appendChild(li);
  div.appendChild(ul);

  return div;
}

const navBar = document.querySelector("#nav-bar");
navBar.appendChild(menu());
