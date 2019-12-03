let form = document.querySelector("#form");
let list = document.querySelector("#list");
let filter = document.querySelector("#filter");

form.addEventListener("submit", addItem);
list.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItem);

function addItem(e) {
  e.preventDefault();

  let item = document.querySelector("#item").value;

  let delBtn = document.createElement("button");
  delBtn.className = "btn btn-danger btn-sm delete float-right";
  delBtn.appendChild(document.createTextNode("Remove Item"));

  let li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(item));
  li.appendChild(delBtn);
  list.appendChild(li);

  document.querySelector("#item").value = "";
}

function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you to remove the selected item?")) {
      let item = e.target.parentElement;
      list.removeChild(item);
    }
  }
}

function filterItem(e) {
  let filterValue = e.target.value.toLowerCase();
  let li = list.getElementsByTagName("li");
  Array.from(li).forEach(item => {
    let i = item.firstChild.textContent;
    console.log(i);
    if (i.toLowerCase().indexOf(filterValue) != -1)
      item.style.display = "block";
    else item.style.display = "none";
  });
}
