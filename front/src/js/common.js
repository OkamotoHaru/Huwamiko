//かな→ひら
function kanaToHira(str) {
	return str.replace(/[\u30a1-\u30f6]/g, function(match) {
		var chr = match.charCodeAt(0) - 0x60;
		return String.fromCharCode(chr);
	});
}

//ひら→かな
function hiraToKana(str) {
	return str.replace(/[\u3041-\u3096]/g, function(match) {
		var chr = match.charCodeAt(0) + 0x60;
		return String.fromCharCode(chr);
	});
}

//英数字全角→半角
function emToHarf(text){
	//intに変換
	var num = parseInt(text);
	//textが文字なら
	if (Number.isNaN(num)){
		//全角→半角
		var text2 = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
			return String.fromCharCode(s.charCodeAt(0) - 65248);
		});
		//再度intに変換
		var num = parseInt(text2);
	}
	//変換後の値を返す
	return num;
}

//英数字半角→全角
function harfToEm(text){
	//intに変換
	var num = parseInt(text);
	///textが文字なら
	if (Number.isNaN(num)){
		//全角→半角
		var text2 = text.replace(/[A-Za-z0-9]/g, (s) => {
			return String.fromCharCode(s.charCodeAt(0) + 65248);
		});
		//再度intに変換
		var num = parseInt(text2);
	}
	//変換後の値を返す
	return num;
}