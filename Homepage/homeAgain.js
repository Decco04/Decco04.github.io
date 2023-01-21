    var vid = document.getElementById("myVideo");
    vid.playbackRate = 1; 
    loadAnimation1();

    function loadAnimation1() {
        document.getElementById('bread-text-left').style.animation="bread-text-left-animation 1.5s cubic-bezier(.33,.17,.37,1)";
        window.setTimeout(loadAnimation2, 750);
    }
    function loadAnimation2() {
        document.getElementById('bread-text-right').style.animation="bread-text-right-animation 1.5s cubic-bezier(.33,.17,.37,1)";
        document.getElementById('bread-text-right').style.left="67%"
        window.setTimeout(loadAnimation3, 850);

    }
    function loadAnimation3() {
        document.getElementById('myVideo').style.animation="map-video-animation 2.5s cubic-bezier(.33,.17,.37,1)";
        document.getElementById('myVideo').style.opacity="1";
        window.setTimeout(loadAnimation4, 750);
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
