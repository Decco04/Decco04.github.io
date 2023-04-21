var modal = document.getElementById("myModal");
var modalContainer = document.getElementById("modalContainer");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  window.setTimeout(function(){modal.style.opacity="0";}, 0);
  window.setTimeout(function(){modal.style.display = "none";}, 300);
}
window.onclick = function(event) {
  if (event.target == modalContainer) {
    window.setTimeout(function(){modal.style.opacity="0";}, 0);
    window.setTimeout(function(){modal.style.display = "none";}, 300);
  }
} 

var titleText = document.getElementById("modalTitleText");
var image = document.getElementById("modalImage");
var textContent = document.getElementById("textContent");
function guideClick(TitleText, imageSRC, text){
    titleText.innerHTML = TitleText;
    image.src = imageSRC;
    textContent.innerHTML = text;
    modal.style.display = "block";
    window.setTimeout(function(){modal.style.opacity="1";}, 0);
}