var smokeFilter = document.getElementById('smokeFilter');
var flashFilter = document.getElementById('flashFilter');
var moloFilter = document.getElementById('moloFilter');
var heFilter = document.getElementById('heFilter');
var smokeButton = document.getElementsByClassName('smokeButton');
var flashButton = document.getElementsByClassName('flashButton');
var moloButton = document.getElementsByClassName('moloButton');
var heButton = document.getElementsByClassName('heButton');
var sizeSmoke = smokeButton.length, sizeFlash = flashButton.length, sizeMolo = moloButton.length, sizeHe = heButton.length;
var smokeButtonClicked = false, flashButtonClicked = false, moloButtonClicked = false, heButtonClicked = false;
var tButton = document.getElementById('tFilter'), ctButton = document.getElementById('ctFilter'), bothFilter = document.getElementById('bothFilter');
var tNade = document.getElementsByClassName('tNade'), ctNade = document.getElementsByClassName('ctNade');
var sizeTNade = tNade.length, sizeCtNade = ctNade.length;
var ctButtonClicked = false, tButtonClicked = false, bothButtonClicked = false;
function showSmoke(){
    if(smokeButtonClicked == true){
        smokeFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeSmoke; i++) {
            smokeButton[i].style.opacity="1";
            smokeButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeFlash; i++) {
            flashButton[i].style.opacity="1";
            flashButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeMolo; i++) {
            moloButton[i].style.opacity="1";
            moloButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeHe; i++) {
            heButton[i].style.opacity="1";
            heButton[i].style.zIndex="1";
        }
        smokeButtonClicked = false;
        flashButtonClicked = false;
        moloButtonClicked = false;
        heButtonClicked = false;
    }
    else{
        smokeFilter.style.backgroundColor="rgba(0,0,0,0.6)";
        flashFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        moloFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        heFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeSmoke; i++) {
            smokeButton[i].style.opacity="1";
            smokeButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeFlash; i++) {
            flashButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeFlash; i++) {
                    flashButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        for (var i = 0; i < sizeMolo; i++) {
            moloButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeMolo; i++) {
                    moloButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        for (var i = 0; i < sizeHe; i++) {
            heButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeHe; i++) {
                    heButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        smokeButtonClicked = true;
        flashButtonClicked = false;
        moloButtonClicked = false;
        heButtonClicked = false;
    }
}
function showFlash(){
    if(flashButtonClicked == true){
        flashFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeSmoke; i++) {
            smokeButton[i].style.opacity="1";
            smokeButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeFlash; i++) {
            flashButton[i].style.opacity="1";
            flashButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeMolo; i++) {
            moloButton[i].style.opacity="1";
            moloButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeHe; i++) {
            heButton[i].style.opacity="1";
            heButton[i].style.zIndex="1";
        }
        smokeButtonClicked = false;
        flashButtonClicked = false;
        moloButtonClicked = false;
        heButtonClicked = false;
    }
    else{
        flashFilter.style.backgroundColor="rgba(0,0,0,0.6)";
        smokeFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        moloFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        heFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeSmoke; i++) {
            smokeButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeSmoke; i++) {
                    smokeButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        for (var i = 0; i < sizeFlash; i++) {
            flashButton[i].style.opacity="1";
            flashButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeMolo; i++) {
            moloButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeMolo; i++) {
                    moloButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        for (var i = 0; i < sizeHe; i++) {
            heButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeHe; i++) {
                    heButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        smokeButtonClicked = false;
        flashButtonClicked = true;
        moloButtonClicked = false;
        heButtonClicked = false;
    }
}
function showHe(){
    if(heButtonClicked == true){
        heFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeSmoke; i++) {
            smokeButton[i].style.opacity="1";
            smokeButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeFlash; i++) {
            flashButton[i].style.opacity="1";
            flashButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeMolo; i++) {
            moloButton[i].style.opacity="1";
            moloButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeHe; i++) {
            heButton[i].style.opacity="1";
            heButton[i].style.zIndex="1";
        }
        smokeButtonClicked = false;
        flashButtonClicked = false;
        moloButtonClicked = false;
        heButtonClicked = false;
    }
    else{
        heFilter.style.backgroundColor="rgba(0,0,0,0.6)";
        flashFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        moloFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        smokeFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeSmoke; i++) {
            smokeButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeSmoke; i++) {
                    smokeButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        for (var i = 0; i < sizeFlash; i++) {
            flashButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeFlash; i++) {
                    flashButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        for (var i = 0; i < sizeMolo; i++) {
            moloButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeMolo; i++) {
                    moloButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        for (var i = 0; i < sizeHe; i++) {
            heButton[i].style.opacity="1";
            heButton[i].style.zIndex="1";
        }
        smokeButtonClicked = false;
        flashButtonClicked = false;
        moloButtonClicked = false;
        heButtonClicked = true;
    }
}
function showMolo(){
    if(moloButtonClicked == true){
        moloFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeSmoke; i++) {
            smokeButton[i].style.opacity="1";
            smokeButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeFlash; i++) {
            flashButton[i].style.opacity="1";
            flashButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeMolo; i++) {
            moloButton[i].style.opacity="1";
            moloButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeHe; i++) {
            heButton[i].style.opacity="1";
            heButton[i].style.zIndex="1";
        }
        smokeButtonClicked = false;
        flashButtonClicked = false;
        moloButtonClicked = false;
        heButtonClicked = false;
    }
    else{
        moloFilter.style.backgroundColor="rgba(0,0,0,0.6)";
        flashFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        smokeFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        heFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeSmoke; i++) {
            smokeButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeSmoke; i++) {
                    smokeButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        for (var i = 0; i < sizeFlash; i++) {
            flashButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeFlash; i++) {
                    flashButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        for (var i = 0; i < sizeMolo; i++) {
            moloButton[i].style.opacity="1";
            moloButton[i].style.zIndex="1";
        }
        for (var i = 0; i < sizeHe; i++) {
            heButton[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeHe; i++) {
                    heButton[i].style.zIndex="-2";
                }
            } , 300);
        }
        smokeButtonClicked = false;
        flashButtonClicked = false;
        moloButtonClicked = true;
        heButtonClicked = false;
    }
}
function showCt(){
    if(ctButtonClicked == true){
        ctButton.style.backgroundColor="rgba(0,0,0,0.2)";
        tButton.style.backgroundColor="rgba(0,0,0,0.2)";
        bothFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeTNade; i++) {
            tNade[i].style.opacity="1";
            tNade[i].style.visibility="visible";
        }
        for (var i = 0; i < sizeCtNade; i++) {
            ctNade[i].style.opacity="1";
            ctNade[i].style.visibility="visible";
        }
        tButtonClicked = false;
        ctButtonClicked = false;
        bothButtonClicked = false;
        showBoth();
    }
    else{
        ctButton.style.backgroundColor="rgba(0,0,0,0.6)";
        tButton.style.backgroundColor="rgba(0,0,0,0.2)";
        bothFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeTNade; i++) {
            tNade[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeTNade; i++) {
                    tNade[i].style.visibility="hidden";
                }
            }, 300);
        }
        for (var i = 0; i < sizeCtNade; i++) {
            ctNade[i].style.opacity="1";
            ctNade[i].style.visibility="visible";
        }
        tButtonClicked = false;
        ctButtonClicked = true;
        bothButtonClicked = false;
    }
}
function showT(){
    if(tButtonClicked == true){
        ctButton.style.backgroundColor="rgba(0,0,0,0.2)";
        tButton.style.backgroundColor="rgba(0,0,0,0.2)";
        bothFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeTNade; i++) {
            tNade[i].style.opacity="1";
            tNade[i].style.visibility="visible";
        }
        for (var i = 0; i < sizeCtNade; i++) {
            ctNade[i].style.opacity="1";
            ctNade[i].style.visibility="visible";
        }
        tButtonClicked = false;
        ctButtonClicked = false;
        bothButtonClicked = false;
        showBoth();
    }
    else{
        tButton.style.backgroundColor="rgba(0,0,0,0.6)";
        ctButton.style.backgroundColor="rgba(0,0,0,0.2)";
        bothFilter.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeTNade; i++) {
            tNade[i].style.opacity="1";
            tNade[i].style.visibility="visible";
        }
        for (var i = 0; i < sizeCtNade; i++) {
            ctNade[i].style.opacity="0";
            window.setTimeout(function(){
                for (var i = 0; i < sizeCtNade; i++) {
                ctNade[i].style.visibility="hidden";}
            }, 300);
        }
        tButtonClicked = true;
        ctButtonClicked = false;
        bothButtonClicked = false;
    }
}
function showBoth(){
        bothFilter.style.backgroundColor="rgba(0,0,0,0.6)";
        tButton.style.backgroundColor="rgba(0,0,0,0.2)";
        ctButton.style.backgroundColor="rgba(0,0,0,0.2)";
        for (var i = 0; i < sizeTNade; i++) {
            tNade[i].style.opacity="1";
            tNade[i].style.visibility="visible";
        }
        for (var i = 0; i < sizeCtNade; i++) {
            ctNade[i].style.opacity="1";
            ctNade[i].style.visibility="visible";
        }
        tButtonClicked = false;
        ctButtonClicked = false;
        bothButtonClicked = true;
}

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

var videoSource = document.getElementById("my-video");
var videoText = document.getElementById("videoText");
function nadeClick(videoLink , text){
    videoSource.src = videoLink;
    videoText.innerHTML = text;
    modal.style.display = "block";
    window.setTimeout(function(){modal.style.opacity="1";}, 0);
}