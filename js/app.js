// select all sections
let branches = document.querySelectorAll("section");

// get ul element
let ulElement = document.getElementById("navbar__list");
// creat new fragment
let fragment = new DocumentFragment();


// make dynamically navigation
branches.forEach((branch) => {
  // creat li element
  let liElement = document.createElement("li");
  // creat anchor element
  let anchorElement = document.createElement("a");
  // add class name to li element
  anchorElement.className = "menu__link";
  // add href attribute to the anchor
  anchorElement.href = `#${branch.id}`;
  //add section title to anchor
  anchorElement.textContent = branch.dataset.acontent;
  // append a element to the li element
  liElement.appendChild(anchorElement);
  // append li to fragment
  fragment.appendChild(liElement);
  
  // smooth behavior
  anchorElement.onclick = function(e) {
    e.preventDefault();
    branch.scrollIntoView({ behavior: "smooth" })
  }

});
// append fragment to the ul
ulElement.appendChild(fragment);



window.onscroll = function () {
  branches.forEach(branch =>{
    let branchOffsetTop = branch.offsetTop;
    let branchOuterHeight = branch.offsetHeight;
    let windowHeight = window.innerHeight;
    let windowScrollTop = window.pageYOffset;
    let connect = document.querySelector(`a[href="#${branch.id}"]`);
    if(windowScrollTop > (branchOffsetTop + branchOuterHeight - windowHeight ) && windowScrollTop < (branchOffsetTop + branchOuterHeight - windowHeight + branchOuterHeight )) {
      connect.classList.add("active");
    } else {
      connect.classList.remove("active");
    }
  })
}