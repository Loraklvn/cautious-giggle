(function(){
	let body = document.querySelector('body');

const getRemindTime = (deadline) => {
let now = new Date();
	let remindTime = (new Date(deadline) - now + 1000) / 1000,
	    remindSeconds = ("0" + Math.floor(remindTime % 60)).slice(-2), 
	    remindMinutes = ("0" + Math.floor((remindTime / 60) % 60)).slice(-2),
	    remindHours = ("0" + Math.floor((remindTime / 3600) % 24)).slice(-2),
	    remindDay = ("0" + Math.floor(remindTime / 86400) ).slice(-2);

	showTime(remindTime, remindSeconds, remindMinutes, remindHours, remindDay);
}

let timerUpdate = setInterval(() => getRemindTime('Sun dec 20 2020 9:01:00 GMT-0400'), 1000)

const showTime = (time, seconds, minutes, hours, days) => {
	let secondsDom = document.getElementById('seconds'),
	    minutesDom = document.getElementById('minutes'),
	    hoursDom = document.getElementById('hours'),
	    daysDom = document.getElementById('days');

	secondsDom.innerText = seconds;
	minutesDom.innerText = minutes;
	hoursDom.innerText = hours;
	daysDom.innerText = days;

	if(time <= 1){
		clearInterval(timerUpdate);
		document.querySelector('.finalMassage').innerText = "It's time to do it";

	}
}

})();