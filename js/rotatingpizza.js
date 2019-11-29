// https://stackoverflow.com/questions/16794310/rotate-image-with-javascript
// https://stackoverflow.com/questions/15896810/how-to-execute-a-function-after-some-time
var t = 0;

window.onload = function iteration()
{
	t += 1;
	
	var angle = Math.pow(t/100, 1.5)*100 % 360;
	
	setTimeout(iteration, 30);
	
	var str = "transform: rotate(" + angle.toString(10) + "deg);";
	document.getElementsByClassName("giantpizza")[0].setAttribute("style", str);
	document.getElementsByClassName("giantpizza")[1].setAttribute("style", str);
	document.getElementsByClassName("giantpizza")[2].setAttribute("style", str);
}