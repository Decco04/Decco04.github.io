function LoadFunction() {
    document.getElementById('BackgroundContainer').style.animation="PageLoad 1s cubic-bezier(.33,.17,.37,1)";
}
var spinImg = document.getElementById("spinImg");
var spinDeg = 0;
var spinDegAdd = 0.2;
var spinDegMult = 1.1;
function imageClick() {
    spinDegAdd = spinDegAdd * spinDegMult;
}
window.setTimeout(spin, 10);
function spin() {
    spinDeg = spinDeg + spinDegAdd;
    spinImg.style.transform = "rotate(" + spinDeg + "deg)";
    window.setTimeout(spin, 10);
}
