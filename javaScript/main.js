const search = document.querySelector(".search");
const li = document.querySelectorAll("li");
const ul = document.querySelector("ul");

const serchProduct = (e) => {
  const txt = e.target.value.toUpperCase();

  li.forEach((el) => {
    if (el.textContent.toUpperCase().indexOf(txt) !== -1) {
      ul.style.display = "block";
      el.style.display = "block";
    } else {
      el.style.display = "none";
      }
     
  });
 
};
search.addEventListener("keyup", serchProduct);
