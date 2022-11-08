//초기화면 셋업
var coin = 0;
document.getElementById("current").innerHTML = coin + "원";
document.getElementById("selection").innerHTML = "아이스크림을 선택해주세요";


//1000원, 500원, 100원 버튼에 리스너 추가
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", click_btn1);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", click_btn2);

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", click_btn3);

//돼지바, 월드콘, 누크바 버튼에 리스너 추가
const icecream1 = document.getElementById("icecream1");
icecream1.addEventListener("click", click_icecream1);

const icecream2 = document.getElementById("icecream2");
icecream2.addEventListener("click", click_icecream2);

const icecream3 = document.getElementById("icecream3");
icecream3.addEventListener("click", click_icecream3);


//1000원 버튼 클릭시 Balance에 1000원 추가
function click_btn1() {
	coin += 1000;
	color_change();
	alert("1000원 넣음");
	document.getElementById("current").innerHTML = coin + "원";
}

//500원 버튼 클릭시 Balance에 500원 추가
function click_btn2() {
	coin += 500;
	color_change();
	alert("500원 넣음");
	document.getElementById("current").innerHTML = coin + "원";
}

//100원 버튼 클릭시 Balance에 100원 추가
function click_btn3() {
	coin += 100;
	color_change();
	alert("100원 넣음");
	document.getElementById("current").innerHTML = coin + "원";
}


//돼지바(700원) 버튼 클릭시 Balance에 -700원, Choice에 돼지바
function click_icecream1() {
	if(coin<700)
		alert("돈이 부족합니다");
	else{
		coin -= 700;
		document.getElementById("selection").innerHTML = "돼지바";
		color_change();
		document.getElementById("current").innerHTML = coin + "원";
	}
}

//월드콘(1000원) 버튼 클릭시 Balance에 -1000원, Choice에 월드콘
function click_icecream2() {
	if(coin<1000)
		alert("돈이 부족합니다");
	else {
		coin -= 1000;
		document.getElementById("selection").innerHTML = "월드콘";
		color_change();
		document.getElementById("current").innerHTML = coin + "원";
	}
}

//누크바(500원) 버튼 클릭시 Balance에 -500원, Choice에 누크바
function click_icecream3() {
	if(coin<500)
		alert("돈이 부족합니다");
	else {
		coin -= 500;
		document.getElementById("selection").innerHTML = "누크바";
		color_change();
		document.getElementById("current").innerHTML = coin + "원";
	}
}

//Balance에 따라 아이스크림 선택버튼 폰트 색 변경을 위한 함수
function color_change(){
	if(coin>=1000)	{
		document.getElementById("icecream1").style.color = "blue";
		document.getElementById("icecream2").style.color = "blue";
		document.getElementById("icecream3").style.color = "blue";
	} else if(coin>=700)	{
		document.getElementById("icecream1").style.color = "blue";
		document.getElementById("icecream2").style.color = "red";
		document.getElementById("icecream3").style.color = "blue";
	} else if(coin>=500)	{
		document.getElementById("icecream1").style.color = "red";
		document.getElementById("icecream2").style.color = "red";
		document.getElementById("icecream3").style.color = "blue";
	} else {
		document.getElementById("icecream1").style.color = "red";
		document.getElementById("icecream2").style.color = "red";
		document.getElementById("icecream3").style.color = "red";
	}
	
}