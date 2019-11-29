var t = 0;
var size= Math.pow(window.innerWidth * window.innerHeight, 0.5) / 2.5;

window.onload = function iteration()
{
	t += 1;
	size *= 0.99;
	
	setTimeout(iteration, 5);
	
	var stri = (((Math.random() * 2) | 0) ? "I am ok, " : "it is fine, ")
	var str = "<span style=\"font-size:" + (size | 0)  + "%\">" + stri + "</span>"
	document.getElementById('helphelp').innerHTML += str;
	
	switch((t>>3)%3)
	{
		case 0:
		document.getElementById("help").setAttribute("style", "color: red;");
		break;
		case 1:
		document.getElementById("help").setAttribute("style", "color: blue;");
		break;
		case 2:
		document.getElementById("help").setAttribute("style", "color: green;");
	}

	if (t == 31<<3)
		window.location.replace("index.html");
}