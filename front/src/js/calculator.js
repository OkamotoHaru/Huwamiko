window.onload = function(){
    setTitleName()
	setSearchInput()
	setSearchTable()
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

//--------------------------------------------------

/// 検索結果テーブル作成
function setSearchTable(){
	//データ設定
	var inputText = "羅刹剣"
	//中間アイテム・素材アイテムリスト設定
	let nameNo = 0
	var input_item = null
	for(var i=0; i<item_data.length; i++){
		if ( item_data[i][nameNo] == inputText ){
			input_item = item_data[i]
			console.log(input_item)
			break
		}
	}
	var matNo = 4
	var sub_items = []
	for (var i=0; i<item_data.length; i++){
		//
		for (var j=0; j<input_item[matNo].length; j++){
			if (item_data[i][nameNo] == input_item[matNo][j][0]){
				sub_items.push( item_data[i] )
			}
		}
	}
	console.log(sub_items)
	//テーブル設定
	var itemTable = document.getElementById("item_table")
	var matTable = document.getElementById("mat_table")
	for (var i=0; i<sub_items.length; i++){
		//ジョブがない、採掘師、園芸師なら素材アイテム
		var setTable = null
		if ( sub_items[i][1] == "" || sub_items[i][1] == "採掘師" || sub_items[i][1] == "園芸師" ){
			setTable = matTable
		}
		else{
			setTable = itemTable
		}
		//行
		var tr = document.createElement("tr")
		setTable.appendChild(tr)
		//名前
		var td_name = document.createElement("td")
		td_name.textContent = sub_items[i][0]
		tr.appendChild(td_name)
		//ジョブ
		var td_job = document.createElement("td")
		td_job.textContent = sub_items[i][1]
		tr.appendChild(td_job)
		//習得方法
		var td_learn = document.createElement("td")
		td_learn.textContent = sub_items[i][2]
		tr.appendChild(td_learn)
		//難易度
		var td_diff = document.createElement("td")
		td_diff.textContent = sub_items[i][3]
		tr.appendChild(td_diff)
	}
}