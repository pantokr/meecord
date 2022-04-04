var navlink = document.getElementsByClassName("nav-link");

function navClick(event) {

  if (event.target.classList[1] === "active") {
	event.target.classList.remove("active");
  } 
  else {
	for (var i = 0; i < navlink.length; i++) {
	  navlink[i].classList.remove("active");
	}

	event.target.classList.add("active");
  }
}

function init() {
  for (var i = 0; i < navlink.length; i++) {
	navlink[i].addEventListener("click", navClick);
  }
}

init();
