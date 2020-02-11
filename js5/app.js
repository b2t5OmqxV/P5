//  変数{alertString}を定義して alertStringに、addStringを入れる
var alertString;
alertString = addString('WebCamp');

//定義＆作成した変数を呼び出す。
alert(alertString);

//function(関数)でaddstring{関数名} (strA){引数/入力値}
function addString(strA){
    //addStrは、’Hello’と　strA("WebCamp")を文字列足し算する
	var addStr = 'Hello ' + strA;
	//return(出力結果)はaddstr{戻り値/出力値}
	return addStr;
}