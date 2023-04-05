export function restaurant() {
  const contentEl = document.querySelector("#content");
  const img = document.createElement("img");
  const header = document.createElement("h1");
  const para = document.createElement("p");

  img.src =
    "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  header.innerText = "Simple Restaurant";
  para.innerText =
    "Restaurant that servers tasty food. Come eat the best burger, pizza, fried chicken, and so many more...";

  contentEl.appendChild(img);
  contentEl.appendChild(header);
  contentEl.appendChild(para);

  return contentEl;
}
document.body.appendChild(restaurant());
