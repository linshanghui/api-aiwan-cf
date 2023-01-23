var myvideo = document.getElementById("video");
var str = '所求皆所愿<br>所行皆坦途<br>多喜乐<br>长安宁';
var i = 0;
var divTyping = document.getElementById('zhuf');
function typing(){
    if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + '_';
        setTimeout('typing()', 200);
    }
    else{
        divTyping.innerHTML = str;
    }
}
function play(){
    myvideo.play();
    document.getElementById("top").classList.add("tran");
    document.getElementById("bottom").classList.add("trans");
    setTimeout("typing();", 2*1000);
}