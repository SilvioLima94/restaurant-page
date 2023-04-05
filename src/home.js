export function home() {
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "https://www.google.com/";

  li.appendChild(a);
  li.innerText = "Home";
  ul.appendChild(li);
  div.appendChild(ul);
  console.log(div);
  return div;
}

const navBar = document.querySelector("#nav-bar");
navBar.appendChild(home());
