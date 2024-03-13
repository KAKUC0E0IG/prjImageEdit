//預設圖片為第一張
const firstsrc = document.getElementById("1").getAttribute("src")
$("#mainimage").attr("src", firstsrc)

//點擊小圖更換背景
function imagechange(id) {
    console.log("click" + id)
    const src = document.getElementById(id).getAttribute("src")
    $("#mainimage").attr("src", src)
}

//文字框移動
let mouseX = 0;
let mouseY = 0;
let offsetX = 0;
let offsetY = 0;
let isDown = false;
var textmove = document.querySelector('#textmove')
var div = document.querySelector(".mydiv");

//手機觸控
div.addEventListener('touchstart', function (e) {
    isDown = true
    mouseX = e.targetTouches[0].pageX
    mouseY = e.targetTouches[0].pageY
    document.addEventListener("touchmove",movetouch)
})

div.addEventListener('touchend', function (e) {
    if (isDown)
    {
        offsetX += e.targetTouches[0].pageX - mouseX
        offsetY += e.targetTouches[0].pageY - mouseY
    }
    isDown = false
    document.addEventListener("touchmove", movetouch)
})

function movetouch(){
    if (isDown) {
        const dx = e.targetTouches[0].pageX - mouseX
        const dy = e.targetTouches[0].pageY - mouseY
        div.style.transform = `translate(${offsetX + dx}px, ${offsetY + dy}px)`
    }
}

//電腦滑鼠
div.addEventListener('mousedown', function (e) {
    isDown = true
    mouseX = e.pageX
    mouseY = e.pageY
    document.addEventListener("mousemove", move)
})

div.addEventListener('mouseup', function (e) {
    if (isDown) {
        offsetX += e.pageX - mouseX
        offsetY += e.pageY - mouseY
    }
    isDown = false
    document.addEventListener("mousemove", move)
})

function move() {
    if (isDown) {
        const dx = e.pageX - mouseX
        const dy = e.pageY - mouseY
        div.style.transform = `translate(${offsetX + dx}px, ${offsetY + dy}px)`
    }
}
