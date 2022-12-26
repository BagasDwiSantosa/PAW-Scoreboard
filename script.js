function addSwipeEvent(DOM, NamaEvent, handleEvent) {
    var mulai=0, selesai=0;

    DOM.addEventListener('touchstart', function(e){
        switch (NamaEvent) {
            case "swipeDown" | "swipeUp":
                mulai = e.targetTouches[0].clientY;
                break;
            default:
                mulai = e.targetTouches[0].clientY;
                break;
        }
    }, false);

    DOM.addEventListener('mousedown', function(e){
        switch (NamaEvent) {
            case "swipeDown" | "swipeUp":
                mulai = e.clientY;
                break;
            default:
                mulai = e.clientY;
                break;
        }
    }, false);

    DOM.addEventListener('touchmove', function(e){
        e.preventDefault();
    }, false)

    DOM.addEventListener('mousemove', function(e){
        e.preventDefault();
    }, false)

    DOM.addEventListener('touchend', function(e){
        switch (NamaEvent) {
            case "swipeDown" | "swipeUp":
                selesai = e.changedTouches[0].clientY;
                break;
            default:
                selesai = e.changedTouches[0].clientY;
                break;
        }

        var PindahValue = selesai-mulai;
        var ABSPindahValue = Math.abs(PindahValue);
        // swipeUp
        if (PindahValue<0 && ABSPindahValue>30 && NamaEvent=="swipeUp") {
            console.log("swipeUp");
            handleEvent();
        }
        // swipeDown
        if (PindahValue>0 && ABSPindahValue>30 && NamaEvent=="swipeDown") {
            console.log("swipeDown");
            handleEvent();
        }
    }, false);

    DOM.addEventListener('mouseup', function(e){
        switch (NamaEvent) {
            case "swipeDown" | "swipeUp":
                selesai = e.clientY;
                break;
            default:
                selesai = e.clientY;
                break;
        }

        var PindahValue = selesai-mulai;
        var ABSPindahValue = Math.abs(PindahValue);
        // swipeUp
        if (PindahValue<0 && ABSPindahValue>30 && NamaEvent=="swipeUp") {
            console.log("swipeUp");
            handleEvent();
        }
        // swipeDown
        if (PindahValue>0 && ABSPindahValue>30 && NamaEvent=="swipeDown") {
            console.log("swipeDown");
            handleEvent();
        }
    }, false);
}

var cover = document.querySelector('.thecover');
//SWIPE UP 
addSwipeEvent(cover, "swipeUp", function(){
    cover.classList.remove("active");
    a1.classList.add("active");
});

addSwipeEvent(a1, "swipeUp", function(){
    a1.classList.remove("active");
    a2.classList.add("active");
});

addSwipeEvent(a2, "swipeUp", function(){
    a2.classList.remove("active");
    a3.classList.add("active");
});

addSwipeEvent(a3, "swipeUp", function(){
    a3.classList.remove("active");
    a4.classList.add("active");
});

addSwipeEvent(a4, "swipeUp", function(){
    a4.classList.remove("active");
    a5.classList.add("active");
});

addSwipeEvent(a5, "swipeUp", function(){
    a5.classList.remove("active");
    a6.classList.add("active");
});

addSwipeEvent(a6, "swipeUp", function(){
    a6.classList.remove("active");
    a7.classList.add("active");
});

addSwipeEvent(a7, "swipeUp", function(){
    a7.classList.remove("active");
    a8.classList.add("active");
});

addSwipeEvent(a8, "swipeUp", function(){
    a8.classList.remove("active");
    a9.classList.add("active");
});

addSwipeEvent(a9, "swipeUp", function(){
    a9.classList.remove("active");
    a10.classList.add("active");
});

addSwipeEvent(a10, "swipeUp", function(){
    a10.classList.remove("active");
    a11.classList.add("active");
});

addSwipeEvent(a11, "swipeUp", function(){
    a11.classList.remove("active");
    a12.classList.add("active");
});

addSwipeEvent(a12, "swipeUp", function(){
    a12.classList.remove("active");
    a13.classList.add("active");
});

addSwipeEvent(a13, "swipeUp", function(){
    a13.classList.remove("active");
    a14.classList.add("active");
});

addSwipeEvent(a14, "swipeUp", function(){
    a14.classList.remove("active");
    a15.classList.add("active");
});

addSwipeEvent(a15, "swipeUp", function(){
    a15.classList.remove("active");
    a16.classList.add("active");
});

addSwipeEvent(a16, "swipeUp", function(){
    a16.classList.remove("active");
    a17.classList.add("active");
});

addSwipeEvent(a17, "swipeUp", function(){
    a17.classList.remove("active");
    a18.classList.add("active");
});

addSwipeEvent(a18, "swipeUp", function(){
    a18.classList.remove("active");
    a19.classList.add("active");
});

addSwipeEvent(a19, "swipeUp", function(){
    a19.classList.remove("active");
    a20.classList.add("active");
});

addSwipeEvent(a20, "swipeUp", function(){
    a20.classList.remove("active");
    a21.classList.add("active");
});

//SWIPE DOWN
addSwipeEvent(a21, "swipeDown", function(){
    a20.classList.add("active");
    a21.classList.remove("active");
});

addSwipeEvent(a20, "swipeDown", function(){
    a19.classList.add("active");
    a20.classList.remove("active");
});

addSwipeEvent(a19, "swipeDown", function(){
    a18.classList.add("active");
    a19.classList.remove("active");
});

addSwipeEvent(a18, "swipeDown", function(){
    a17.classList.add("active");
    a18.classList.remove("active");
});

addSwipeEvent(a17, "swipeDown", function(){
    a16.classList.add("active");
    a17.classList.remove("active");
});

addSwipeEvent(a16, "swipeDown", function(){
    a15.classList.add("active");
    a16.classList.remove("active");
});

addSwipeEvent(a15, "swipeDown", function(){
    a14.classList.add("active");
    a15.classList.remove("active");
});

addSwipeEvent(a14, "swipeDown", function(){
    a13.classList.add("active");
    a14.classList.remove("active");
});

addSwipeEvent(a13, "swipeDown", function(){
    a12.classList.add("active");
    a13.classList.remove("active");
});

addSwipeEvent(a12, "swipeDown", function(){
    a11.classList.add("active");
    a12.classList.remove("active");
});

addSwipeEvent(a11, "swipeDown", function(){
    a10.classList.add("active");
    a11.classList.remove("active");
});

addSwipeEvent(a10, "swipeDown", function(){
    a9.classList.add("active");
    a10.classList.remove("active");
});

addSwipeEvent(a9, "swipeDown", function(){
    a8.classList.add("active");
    a9.classList.remove("active");
});

addSwipeEvent(a8, "swipeDown", function(){
    a7.classList.add("active");
    a8.classList.remove("active");
});

addSwipeEvent(a7, "swipeDown", function(){
    a6.classList.add("active");
    a7.classList.remove("active");
});

addSwipeEvent(a6, "swipeDown", function(){
    a5.classList.add("active");
    a6.classList.remove("active");
});

addSwipeEvent(a5, "swipeDown", function(){
    a4.classList.add("active");
    a5.classList.remove("active");
});

addSwipeEvent(a4, "swipeDown", function(){
    a3.classList.add("active");
    a4.classList.remove("active");
});

addSwipeEvent(a3, "swipeDown", function(){
    a2.classList.add("active");
    a3.classList.remove("active");
});

addSwipeEvent(a2, "swipeDown", function(){
    a1.classList.add("active");
    a2.classList.remove("active");
});

addSwipeEvent(a1, "swipeDown", function(){
    cover.classList.add("active");
    a1.classList.remove("active");
});


var cover2 = document.querySelector('.thecover2');
//SWIPE UP 2
addSwipeEvent(cover2, "swipeUp", function(){
    cover2.classList.remove("active");
    b1.classList.add("active");
});

addSwipeEvent(b1, "swipeUp", function(){
    b1.classList.remove("active");
    b2.classList.add("active");
});

addSwipeEvent(b2, "swipeUp", function(){
    b2.classList.remove("active");
    b3.classList.add("active");
});

addSwipeEvent(b3, "swipeUp", function(){
    b3.classList.remove("active");
    b4.classList.add("active");
});

addSwipeEvent(b4, "swipeUp", function(){
    b4.classList.remove("active");
    b5.classList.add("active");
});

addSwipeEvent(b5, "swipeUp", function(){
    b5.classList.remove("active");
    b6.classList.add("active");
});

addSwipeEvent(b6, "swipeUp", function(){
    b6.classList.remove("active");
    b7.classList.add("active");
});

addSwipeEvent(b7, "swipeUp", function(){
    b7.classList.remove("active");
    b8.classList.add("active");
});

addSwipeEvent(b8, "swipeUp", function(){
    b8.classList.remove("active");
    b9.classList.add("active");
});

addSwipeEvent(b9, "swipeUp", function(){
    b9.classList.remove("active");
    b10.classList.add("active");
});

addSwipeEvent(b10, "swipeUp", function(){
    b10.classList.remove("active");
    b11.classList.add("active");
});

addSwipeEvent(b11, "swipeUp", function(){
    b11.classList.remove("active");
    b12.classList.add("active");
});

addSwipeEvent(b12, "swipeUp", function(){
    b12.classList.remove("active");
    b13.classList.add("active");
});

addSwipeEvent(b13, "swipeUp", function(){
    b13.classList.remove("active");
    b14.classList.add("active");
});

addSwipeEvent(b14, "swipeUp", function(){
    b14.classList.remove("active");
    b15.classList.add("active");
});

addSwipeEvent(b15, "swipeUp", function(){
    b15.classList.remove("active");
    b16.classList.add("active");
});

addSwipeEvent(b16, "swipeUp", function(){
    b16.classList.remove("active");
    b17.classList.add("active");
});

addSwipeEvent(b17, "swipeUp", function(){
    b17.classList.remove("active");
    b18.classList.add("active");
});

addSwipeEvent(b18, "swipeUp", function(){
    b18.classList.remove("active");
    b19.classList.add("active");
});

addSwipeEvent(b19, "swipeUp", function(){
    b19.classList.remove("active");
    b20.classList.add("active");
});

addSwipeEvent(b20, "swipeUp", function(){
    b20.classList.remove("active");
    b21.classList.add("active");
});

//SWIPE DOWN 2
addSwipeEvent(b21, "swipeDown", function(){
    b20.classList.add("active");
    b21.classList.remove("active");
});

addSwipeEvent(b20, "swipeDown", function(){
    b19.classList.add("active");
    b20.classList.remove("active");
});

addSwipeEvent(b19, "swipeDown", function(){
    b18.classList.add("active");
    b19.classList.remove("active");
});

addSwipeEvent(b18, "swipeDown", function(){
    b17.classList.add("active");
    b18.classList.remove("active");
});

addSwipeEvent(b17, "swipeDown", function(){
    b16.classList.add("active");
    b17.classList.remove("active");
});

addSwipeEvent(b16, "swipeDown", function(){
    b15.classList.add("active");
    b16.classList.remove("active");
});

addSwipeEvent(b15, "swipeDown", function(){
    b14.classList.add("active");
    b15.classList.remove("active");
});

addSwipeEvent(b14, "swipeDown", function(){
    b13.classList.add("active");
    b14.classList.remove("active");
});

addSwipeEvent(b13, "swipeDown", function(){
    b12.classList.add("active");
    b13.classList.remove("active");
});

addSwipeEvent(b12, "swipeDown", function(){
    b11.classList.add("active");
    b12.classList.remove("active");
});

addSwipeEvent(b11, "swipeDown", function(){
    b10.classList.add("active");
    b11.classList.remove("active");
});

addSwipeEvent(b10, "swipeDown", function(){
    b9.classList.add("active");
    b10.classList.remove("active");
});

addSwipeEvent(b9, "swipeDown", function(){
    b8.classList.add("active");
    b9.classList.remove("active");
});

addSwipeEvent(b8, "swipeDown", function(){
    b7.classList.add("active");
    b8.classList.remove("active");
});

addSwipeEvent(b7, "swipeDown", function(){
    b6.classList.add("active");
    b7.classList.remove("active");
});

addSwipeEvent(b6, "swipeDown", function(){
    b5.classList.add("active");
    b6.classList.remove("active");
});

addSwipeEvent(b5, "swipeDown", function(){
    b4.classList.add("active");
    b5.classList.remove("active");
});

addSwipeEvent(b4, "swipeDown", function(){
    b3.classList.add("active");
    b4.classList.remove("active");
});

addSwipeEvent(b3, "swipeDown", function(){
    b2.classList.add("active");
    b3.classList.remove("active");
});

addSwipeEvent(b2, "swipeDown", function(){
    b1.classList.add("active");
    b2.classList.remove("active");
});

addSwipeEvent(b1, "swipeDown", function(){
    cover2.classList.add("active");
    b1.classList.remove("active");
});