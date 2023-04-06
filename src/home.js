export function home() {
  const div = document.createElement("div");
  const header = document.createElement("h3");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const button = document.createElement("button");

  div.classList.add("tabcontent");
  div.id = "Home";
  header.innerText = "Home";
  img.src =
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  img.alt = "restaurant";
  p.innerText = "Best restaurant in town";
  button.innerText = "Home";
  button.classList = "tablinks";

  div.appendChild(img);
  div.appendChild(header);
  div.appendChild(p);
  div.appendChild(button);
  return div;
}

// const contentElement = document.querySelector("#content");
// contentElement.appendChild(home());
