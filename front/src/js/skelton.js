window.onload = function(){
	setTitleName()
	console.log("success to open");
}

//--------------------------------------------------

var TITLE = "ふわふわミコッテ（仮）"

function setTitleName(){
	var tabTitle = document.getElementById("tabTitle")
	var pageTitle = document.getElementById("pageTitle")

	tabTitle.textContent = TITLE
	pageTitle.textContent = TITLE
}

//btn.addEventListener("click", function(){ PushedPartyNameBtn(text, no) });