var m = document.querySelector("a-marker")
m.addEventListener("markerFound", (e) => {
    console.log("found")
    var v = document.querySelector('#mivideo').play();


})
m.addEventListener("markerLost", (e) => {
    console.log("lost")
    var v = document.querySelector('#mivideo').pause();

})


document.getElementById("btn1").addEventListener("click", (e) => {

    var v = document.querySelector('#mivideo').muted = false;
})
document.getElementById("btn2").addEventListener("click", (e) => {

    var v = document.querySelector('#mivideo').muted = true;
})
document.getElementById("btn3").addEventListener("click", (e) => {

    <a href="www.facebook.com/alejandrocalgaro"></a>
})
document.getElementById("btn4").addEventListener("click", (e) => {

    var v = document.querySelector('#mivideo').play();
})


