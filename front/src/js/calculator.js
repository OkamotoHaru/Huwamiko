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

/// 追加済か検索したときの戻り値
var RES_ADDED = {
	NO : 0,		//追加不可
	YES : 1,	//追加可能
	JOB : 2,	//ジョブのみ追加可能
};

var mat_total_list = []
var item_total_list = []

/// 検索結果テーブル設定
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
	//リストデータ設定
	let matNo = 4
	for (var i=0; i<inputItemData[matNo].length; i++){
		setList(inputItemData[matNo][i][0], inputItemData[matNo][i][1])
	}
	//設定したリストデータを１本化
	setTotalList(mat_total_list, mat_list)
	setTotalList(item_total_list, item_list)
	//テーブルに反映
	var mat_table = document.getElementById("mat_table")
	setTable( mat_table, mat_total_list )
	var item_table = document.getElementById("item_table")
	setTable( item_table, item_total_list )
}

var mat_list = []
var item_list = []
var recursion_num = -1

/// リストデータ作成
function setList(name, num){
	//console.log(name, num)
	//再帰カウント
	recursion_num += 1
	//配列階層設定
	var check_array_num = recursion_num + 1
	if (mat_list.length < check_array_num){
		for (var i=mat_list.length; i<check_array_num; i++){ mat_list.push([]) }
	}
	if (item_list.length < check_array_num){
		for (var i=item_list.length; i<check_array_num; i++){ item_list.push([]) }
	}

	for (var i=0; i<item_data.length; i++){
		let nameNo = 0
		if (item_data[i][nameNo] == name){
			var array = new Array
			let jobNo = 1
			if (item_data[i][jobNo] == "" || item_data[i][jobNo] == "園芸師" || item_data[i][jobNo] == "採掘師"){
				//追加方法設定
				var check = checkAdded(mat_list[recursion_num], item_data[i][nameNo], item_data[i][jobNo])

				switch (check[0]){
				//ジョブのみ追加
				case RES_ADDED.JOB:
					mat_list[recursion_num][check[1]][3].push( item_data[i][jobNo] )
					break
				//通常追加
				case RES_ADDED.YES:
					//名前
					array.push( item_data[i][nameNo] )
					//個数
					array.push( num )
					//所持済
					array.push( "have" )
					//ジョブ
					array.push( new Array(item_data[i][jobNo]) )
					//テレポ
					array.push( "telep" )
					//座標
					array.push( "X: Y:" )
					//リスト追加
					mat_list[recursion_num].push( array )	
					break
				default:
					break
				}
			}
			else{
				//追加方法設定
				var check = checkAdded(item_list[recursion_num], item_data[i][nameNo], item_data[i][jobNo])
				var multi_num = num

				switch (check[0]){
				//ジョブのみ追加
				case RES_ADDED.JOB:
					item_list[recursion_num][check[1]][3].push( item_data[i][jobNo] )
					break
				//通常追加
				case RES_ADDED.YES:
					//名前
					array.push( item_data[i][nameNo] )
					//個数
					multi_num = multi_num / item_data[i][6]
					Math.ceil(multi_num)
					if (multi_num <= 1) { multi_num = 1 }
					console.log(item_data[i][nameNo], item_data[i][6], num, multi_num)
					array.push( multi_num )
					//所持済
					array.push( "have" )
					//ジョブ
					array.push( new Array(item_data[i][jobNo]) )
					//リスト追加
					item_list[recursion_num].push( array )
					break
				default:
					break
				}

				for(var j=0; j<item_data[i][4].length; j++){
					//さーーーーーーいき！！
					setList( item_data[i][4][j][0], item_data[i][4][j][1] * multi_num )
				}
			}
		}
	}

	//再帰カウント
	recursion_num -= 1
}

/// 追加済みか検索
/// 
/// return: 状態、配列番号
function checkAdded(list, newName, newJobName){
	var array = new Array
	for (var i=0; i<list.length; i++){
		//リストチェック
		if (list[i][0] == newName){
			array.push( RES_ADDED.JOB )
			array.push( i )
			return array
		}
	}
	array.push( RES_ADDED.YES )
	return array
}

/// 検索結果テーブルにデータを設定
function setTable(table, list){
	for (var i=0; i<list.length; i++){
		var tr = document.createElement("tr")
		table.appendChild( tr )
		for (var j=0; j<list[i].length; j++){
			var td = document.createElement("td")
			switch (list[i][j]){
			case "have":
				var select = document.createElement("select")
				select.name = "have"
				td.appendChild(select)
				var options_text = ["なし","プレイヤー","Juliane","Yuigahama","チョコボかばん","ミラージュドレッサー","カンパニーチェスト"]
				for (var k=0; k<options_text.length; k++){
					var option = document.createElement("option")
					option.textContent = options_text[k]
					select.appendChild( option )
				}
				break
			default:
				td.textContent = list[i][j]
				break
			}
			tr.appendChild(td)
		}
	}
}

/// リストデータ１本化
function setTotalList(setList, list){
	for (var i=0; i<list.length; i++){
		for (var j=0; j<list[i].length; j++){
			var added = false
			for (var k=0; k<setList.length; k++){
				if (setList[k][0] == list[i][j][0]){
					setList[k][1] += list[i][j][1]
					added = true
					break
				}
			}
			if (!added){
				setList.push( list[i][j] )
			}
		}
	}
}

//--------------------------------------------------