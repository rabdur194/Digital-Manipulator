function convert()
{
	if(document.getElementById("drop").selectedIndex==0)
	{
		var x=document.getElementById("in").value*0.4536;
		document.getElementById("out").innerHTML=x+"kilograms";
	}
	if(document.getElementById("drop").selectedIndex==1)
	{
		var x=document.getElementById("in").value*2.20462;
		document.getElementById("out").innerHTML=x+"pounds";
	}
}