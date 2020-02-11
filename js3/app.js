var max = 100;
var num = 50;
var count = 0;

while(num < max){
	// d o の内容
	num = num * 2;
	count = count + 1;
	// d o は条件を超えた場合は1回表示する　※w h i l eのままだと表示しない！！
}

alert('2を掛けて続けて'+ max + 'を越えるのに必要だった回数は' + count + '回です');