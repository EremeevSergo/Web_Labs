var necessary_date = new Date("June 30, 2024 00:00:00");
var timer = document.getElementById("timer");

// Функция Math.trunc() возвращает целую часть числа путём удаления всех дробных знаков.


function Timer(){
	var current_date = Date.now();
	var end = necessary_date - current_date;
	var days = Math.trunc(end/1000/60/60/24);
	end = end - days*1000*60*60*24;
	var hours = Math.trunc(end/1000/60/60);
	end = end - hours*1000*60*60;
	var minutes = Math.trunc(end/1000/60);
	end = end - minutes*1000*60;
	var seconds = Math.trunc(end/1000);
	var st = days + "дн.  : " + hours  + "ч. : " + minutes + "м : " + seconds + "с";
	timer.innerText = st; //полностью удалит все предыдущее содержимое и перезапишет его 
};

setInterval(Timer,500);