    var vid = document.getElementById("myVideo");
    vid.playbackRate = 1; 
    myStartFunction();

    function myStartFunction(){
        var x = window.matchMedia("(max-width: 450px)")
        if (x.matches) {
            loadAnimation1();

    function loadAnimation1() {
        document.getElementById('bread-text-left').style.animation="bread-text-left-animation 1.5s cubic-bezier(.33,.17,.37,1)";
        window.setTimeout(loadAnimation2, 750);
    }
    function loadAnimation2() {
        document.getElementById('bread-text-right').style.animation="bread-text-right-animation-small 1.8s cubic-bezier(.33,.17,.37,1)";
        document.getElementById('bread-text-right').style.marginLeft="-62%";
        window.setTimeout(loadAnimation3, 1500);
        window.setTimeout(loadAnimation4, 1000);
    }
    function loadAnimation3() {
        document.getElementById('myVideo').style.animation="map-video-animation 1.5s cubic-bezier(.33,.17,.37,1)";
        document.getElementById('myVideo').style.opacity="1";
    }
    function loadAnimation4() {
        var elems = document.getElementsByClassName('grid-link'),
        size = elems.length;
        for (var i = 0; i < size; i++) {
            var box = elems[i];
            box.style.zIndex="1";
        }
        document.getElementById('parent').style.animation="maps-animation 1.5s cubic-bezier(.33,.17,.37,1)";
        document.getElementById('parent').style.opacity="1";
    }
         }
        else {
            loadAnimation1();

    function loadAnimation1() {
        document.getElementById('bread-text-left').style.animation="bread-text-left-animation 1.5s cubic-bezier(.33,.17,.37,1)";
        window.setTimeout(loadAnimation2, 750);
    }
    function loadAnimation2() {
        document.getElementById('bread-text-right').style.animation="bread-text-right-animation 1.5s cubic-bezier(.33,.17,.37,1)";
        document.getElementById('bread-text-right').style.marginLeft="67%";
        window.setTimeout(loadAnimation3, 1500);
        window.setTimeout(loadAnimation4, 1000);
    }
    function loadAnimation3() {
        document.getElementById('myVideo').style.animation="map-video-animation 1.5s cubic-bezier(.33,.17,.37,1)";
        document.getElementById('myVideo').style.opacity="1";
    }
    function loadAnimation4() {
        var elems = document.getElementsByClassName('grid-link'),
        size = elems.length;
        for (var i = 0; i < size; i++) {
            var box = elems[i];
            box.style.zIndex="1";
        }
        document.getElementById('parent').style.animation="maps-animation 1.5s cubic-bezier(.33,.17,.37,1)";
        document.getElementById('parent').style.opacity="1";
    }
        }
    }

    function myFunction() {
      var x = window.matchMedia("(max-width: 450px)")
        if (x.matches) { // If media query matches
        document.getElementById('bread-text-right').style.marginLeft="-62%";
        } else {
        document.getElementById('bread-text-right').style.marginLeft="67%";
          
        }
      }  
/*          
      const scroller = document.querySelector(':root');
      scroller.onscroll = scrollEvent();
      scroller.addEventListener("scroll", (event) => {
        
      });
      var scrollContainer = document.getElementsByClassName("scroll-down-container");
      function scrollEvent(){
        console.log("HEJHEJ");
      }*/
        