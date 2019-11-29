var t = 0;

window.onload = function iteration()
{
	t += 1;
	
	setTimeout(iteration, 40);
	
	switch(t%3)
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

	if (t == 31)
		window.location.replace("index.html");
}