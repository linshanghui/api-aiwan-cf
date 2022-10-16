$(function(){
	time()
	setInterval(time,500);
})
function time(){
	var t = new Date;
	var str = sj(t.getHours())+":"+sj(t.getMinutes())+":"+sj(t.getSeconds());
	$(".time").html(str);
}
function sj(n){
	if(n<10){
		return "0" + n;
	}
	return n;
}