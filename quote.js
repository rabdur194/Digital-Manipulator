var quote = ['There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. ', 
'Life is not about finding yourself. Life is about creating yourself. ',
'Let the improvement of yourself keep you so busy that you have no time to criticize others.',
'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',
'Success is not final, failure is not fatal: it is the courage to continue that counts.',
'Be the change that you wish to see in the world.',
'Trust yourself. You know more than you think you do.',
'Without deviation from the norm, progress is not possible.',
'You cannot swim for new horizons until you have courage to lose sight of the shore.',
'Blessed is he who expects nothing, for he shall never be disappointed.',
'No one can make you feel inferior without your consent.',
'It is only after you have stepped outside your comfort zone that you begin to change, grow, and transform.',
'Change the way you look at things and the things you look at change.',
'Do not fear failure but rather fear not trying.',
'Instead of worrying about what you cannot control, shift your energy to what you can create.'];

var randomNumber = Math.floor(Math.random() * (quote.length));
document.getElementById("display").innerHTML = quote[randomNumber];
	document.getElementById("box").style.background = "	#c0d6e4";
	document.getElementById("box").style.borderColor = "black";
	document.getElementById("display").style.color = "black";



function red(){
	document.getElementById("box").style.background = "	#660b15";
	document.getElementById("box").style.borderColor = "#1c1c1c";
	document.getElementById("display").style.color = "#ffffff";
	document.getElementById("display").style.fontStyle = "italic";
	document.getElementById("display").style.fontSize = "19px";

	
}

function blue(){
	document.getElementById("box").style.background = "	#c0d6e4";
	document.getElementById("box").style.borderColor = "black";
	document.getElementById("display").style.color = "black";
	document.getElementById("display").style.fontStyle = "oblique";
	document.getElementById("display").style.fontSize = "19px";
}

function green(){

	document.getElementById("box").style.background = "#1b4530";
	document.getElementById("box").style.borderColor = "#adae6d";
	document.getElementById("display").style.color = "#dfcb9b";
	document.getElementById("display").style.fontStyle = "normal";
	document.getElementById("display").style.fontSize = "21px";
}

function yellow(){
	document.getElementById("box").style.background = "	#cca447";
	document.getElementById("box").style.borderColor = "	#515356";
	document.getElementById("display").style.color = "		#515356";
	document.getElementById("display").style.fontStyle = "italic";
	document.getElementById("display").style.fontSize = "21px";
}