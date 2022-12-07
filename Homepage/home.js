const menuToggle = document.querySelector(".menu-btn");

menuToggle.addEventListener("click", () => {
	menuToggle.classList.toggle("change");
    menuToggle.classList.toggle("menu-hide");

});

document.querySelector(document).ready(function(){
    document.querySelector('#menu').click(function(){
      document.querySelector('.menu-hide').classList.toggle('show');
    });
    document.querySelector('a').click(function(){
      document.querySelector('.menu-hide').classList.remove('show');
    });
  });