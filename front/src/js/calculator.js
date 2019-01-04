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

function setSearchTable(){
	//データ設定
	var inputText = "羅刹剣"
	var inputItemData = null
	for (var i=0; i<item_data.length; i++){
		if (inputText == item_data[i][0]){
			inputItemData = item_data[i]
			break
		}
	}
	//テーブル設定
	let matNo = 4
	for (var i=0; i<inputItemData[matNo].length; i++){
		setListTable(inputItemData[matNo][i][0], inputItemData[matNo][i][1])
	}
}

function setListTable(name, num){

	for (var i=0; i<item_data.length; i++){
		let nameNo = 0
		if (item_data[i][nameNo] == name){
			let jobNo = 1
			if (item_data[i][jobNo] == "" || item_data[i][jobNo] == "園芸師" || item_data[i][jobNo] == "採掘師"){
				var matTable = document.getElementById("mat_table")
				//素材テーブルに追加
				var tr = document.createElement("tr")
				matTable.appendChild(tr)
				//名前
				var td_name = document.createElement("td")
				td_name.textContent = item_data[i][nameNo]
				tr.appendChild(td_name)
				//個数
				var td_num = document.createElement("td")
				td_num.textContent = num
				tr.appendChild(td_num)
				//所持済
				var td_have = document.createElement("td")
				tr.appendChild(td_have)
				var select = document.createElement("select")
				select.name = "have"
				td_have.appendChild(select)
				var options_text = ["プレイヤー","Juliane","Yuigahama","チョコボかばん","ミラージュドレッサー","カンパニーチェスト"]
				for (var j=0; j<options_text.length; j++){
					var option = document.createElement("option")
					option.textContent = options_text[j]
					select.appendChild( option )
				}
				//ジョブ
				var td_job = document.createElement("td")
				td_job.textContent = item_data[i][jobNo]
				tr.appendChild(td_job)
				//テレポ
				var td_telep = document.createElement("td")
				td_telep.textContent = "telep"
				tr.appendChild(td_telep)
				//座標
				var td_pos = document.createElement("td")
				td_pos.textContent = "X: Y:"
				tr.appendChild(td_pos)
			}
			else{
				var itemTable = document.getElementById("item_table")
				//素材テーブルに追加
				var tr = document.createElement("tr")
				itemTable.appendChild(tr)
				//名前
				var td_name = document.createElement("td")
				td_name.textContent = item_data[i][nameNo]
				tr.appendChild(td_name)
				//個数
				var td_num = document.createElement("td")
				td_num.textContent = num
				tr.appendChild(td_num)
				//所持済
				var td_have = document.createElement("td")
				tr.appendChild(td_have)
				var select = document.createElement("select")
				select.name = "have"
				td_have.appendChild(select)
				var options_text = ["プレイヤー","Juliane","Yuigahama","チョコボかばん","ミラージュドレッサー","カンパニーチェスト"]
				for (var j=0; j<options_text.length; j++){
					var option = document.createElement("option")
					option.textContent = options_text[j]
					select.appendChild( option )
				}
				//ジョブ
				var td_job = document.createElement("td")
				td_job.textContent = item_data[i][jobNo]
				tr.appendChild(td_job)
				//テレポ
				var td_telep = document.createElement("td")
				td_telep.textContent = "telep"
				tr.appendChild(td_telep)

				for(var j=0; j<item_data[i][4].length; j++){
					setListTable( item_data[i][4][j][0], item_data[i][4][j][1])
				}
			}
		}
	}
}