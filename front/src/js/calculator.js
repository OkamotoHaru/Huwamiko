window.onload = function(){
    setTitleName()
    setSearchInput()
	console.log("success to open");
}

//--------------------------------------------------

var TITLE = "ふわふわミコッテ（仮）"

function setTitleName(){
	var tabTitle = document.getElementById("tabTitle")
	var pageTitle = document.getElementById("pageTitle")
	//var footerTitle = document.getElementById("footerTitle")

	tabTitle.textContent = TITLE
	pageTitle.textContent = TITLE
	//footerTitle.textContent = TITLE
}

//--------------------------------------------------

var SEARCH_PLACEHOLDER = "例：ナイトスチールソード、藍麻"

/// 検索欄の設定
function setSearchInput(){
	var searchInput = document.getElementById("search_input")
	searchInput.placeholder = SEARCH_PLACEHOLDER
}