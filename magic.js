function clearIt()
{
	var x=document.getElementById("Minput").value;
	document.getElementById("Minput").value="";

}

function capitalize()
{
	var x=document.getElementById("Minput").value;
	if(x== x.toUpperCase())
	{
		document.getElementById("Minput").value=x.toLowerCase();
	}
	else
	{
		document.getElementById("Minput").value=x.toUpperCase();
	}
}
function sort()
{
	var x=document.getElementById("Minput").value;
	var res=x.split("\n");
	res.sort();
	document.getElementById("Minput").value=res.join("\n");
}
function reverse()
{
	var x=document.getElementById("Minput").value;
	var res=x.split("\n");
	res.reverse();
	document.getElementById("Minput").value=res.join("\n");
}
function stripBlank()
{
	var x = document.getElementById("Minput").value ;
	var res = x.split("\n");
	var newStr = "";
	
	for(x=0; x<res.length; x++){
		var resStr = res[x].replace(/^\s+|\s+$/gm, "");
		if(resStr!=0){
			string = res[x].trim();
			newStr += string;
			if(x<res.length-1){
				newStr+="\n" ;
			}
		}
	}
	//var res = x..replace(/\s+/g, "") ;
    
	//Strip Blank
	
	document.getElementById("Minput").value = newStr;
}

function addNumbers()
{
    var x = document.getElementById("Minput").value ;
	var res = x.split("\n");
	
	var count =1;
	for(x=0; x<res.length; x++){ 
		res[x]= count + " " +res[x];
		count++;
	}
	
	document.getElementById("Minput").value = res.join("\n");
	
}

function shuffle()
{
	var x = document.getElementById("Minput").value ;
	var res = x.split("\n");
	var temp=0;
	 
	for(x=0; x<res.length; x++){
          randomNumber = Math.floor(Math.random() * (res.length));		
	   temp = res[x];
	   res[x] = res[randomNumber];
	  res[randomNumber] = temp;
	}
	document.getElementById("Minput").value = res.join("\n");

	
	
}
