const timeTracker = document.querySelector(".time");
const time = {
	current: -1,
	last: Date.now(),
	ms: 0,
};

// MAX scale = 3600
const settings = {
	scale: 15,
};

function update() {
	time.current = Date.now();
	time.ms += (time.current - time.last) * settings.scale;
	time.last = time.current;
	// time.seconds += settings.scale / 60;
	// if (time.seconds >= 60) {
	// 	time.minutes++;
	// 	time.seconds = 0;
	// }
	// if (time.minutes >= 60) {
	// 	time.hours++;
	// 	time.minutes = 0;
	// }
	//timeTracker.textContent = `${time.hours}:${time.minutes}:${Math.floor(time.seconds)}`;
	displayTime();
}

function displayTime() {
	const stamp = new Date(time.ms);
	const hours = stamp.getHours();
	const minutes = stamp.getMinutes();
	const seconds = stamp.getSeconds();
	timeTracker.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

let timer = setInterval(update, 10);

function padZero(num) {
	return num > 9 ? num : "0" + num;
}
