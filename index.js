const leaderBoard = [];

const startIteration1 = document.getElementById('startIteration1');
const finishIteration1 = document.getElementById('finishIteration1');
const startIteration2 = document.getElementById('startIteration2');
const finishIteration2 = document.getElementById('finishIteration2');
const startIteration3 = document.getElementById('startIteration3');
const finishIteration3 = document.getElementById('finishIteration3');
const startIteration4 = document.getElementById('startIteration4');
const finishIteration4 = document.getElementById('finishIteration4');

const participants = [
	{
		id: 1,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 2,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 3,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 4,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 5,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 6,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 7,
		startTime: '',
		iterationCount: 0,
	},
	{
		id: 8,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 9,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 10,
		iterationCount: 0,
	},
	{
		id: 11,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 12,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 13,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 14,
		startTime: 0,
		iterationCount: 0,
	},
	{
		id: 15,
		startTime: 0,
		iterationCount: 0,
	},
];

startIteration1.addEventListener('click', () => {
	const id = document.getElementById('iteration1').value;
	participants[id - 1].startTime = new Date();
	let time = 3600;
	setInterval(() => {
		time -= 1;
		document.getElementById('count1').innerText = time;
	}, 1000);
});

finishIteration1.addEventListener('click', () => {
	const id = document.getElementById('iteration1').value;
	const seconds = participants[id - 1].startTime.getTime() / 1000;
	const currentTime = new Date().getTime() / 1000;
	console.log(id, seconds);
	if (currentTime >= seconds + 3600) {
		participants[id - 1].iterationCount = 1;
		resetLeaderBoard(id);
	} else {
		alert('Countdown to iteration 1 in progress');
	}
});

startIteration2.addEventListener('click', () => {
	const id = document.getElementById('iteration2').value;
	if (participants[id - 1].iterationCount !== 1) {
		alert('you have to finish iteration 1');
	} else participants[id - 1].startTime = new Date();
	let time = 3600;
	setInterval(() => {
		time -= 1;
		document.getElementById('count2').innerText = time;
	}, 1000);
});

finishIteration2.addEventListener('click', () => {
	const id = document.getElementById('iteration2').value;
	const seconds = participants[id - 1].startTime.getTime() / 1000;
	console.log(seconds);
	const currentTime = new Date().getTime() / 1000;
	if (participants[id - 1].iterationCount === 1) {
		if (currentTime >= seconds + 3600) {
			participants[id - 1].iterationCount = 2;
			resetLeaderBoard(id);
		} else {
			alert('Countdown to iteration 2 in progress');
		}
	}
});

startIteration3.addEventListener('click', () => {
	const id = document.getElementById('iteration3').value;
	if (participants[id - 1].iterationCount !== 2) {
		console.log('you have to finish iteration 2');
	} else participants[id - 1].startTime = new Date();
	let time = 3600;
	setInterval(() => {
		time -= 1;
		document.getElementById('count3').innerText = time;
	}, 1000);
});

finishIteration3.addEventListener('click', () => {
	const id = document.getElementById('iteration3').value;
	const seconds = participants[id - 1].startTime.getTime() / 1000;
	const currentTime = new Date().getTime() / 1000;
	if (participants[id - 1].iterationCount === 2) {
		if (currentTime >= seconds + 3600) {
			participants[id - 1].iterationCount = 3;
			resetLeaderBoard(id);
		} else {
			alert('Countdown to iteration 3 in progress');
		}
	}
});

startIteration4.addEventListener('click', () => {
	const id = document.getElementById('iteration4').value;
	if (participants[id - 1].iterationCount !== 3) {
		console.log('you have to finish iteration 3');
	} else participants[id - 1].startTime = new Date();
	let time = 3600;
	setInterval(() => {
		time -= 1;
		document.getElementById('count4').innerText = time;
	}, 1000);
});

finishIteration4.addEventListener('click', () => {
	const id = document.getElementById('iteration4').value;
	const seconds = participants[id - 1].startTime.getTime() / 1000;
	const currentTime = new Date().getTime() / 1000;
	if (participants[id - 1].iterationCount === 3) {
		if (currentTime >= seconds + 3600) {
			participants[id - 1].iterationCount = 4;
			resetLeaderBoard(id);
		} else {
			alert('Countdown to iteration 4 in progress');
		}
	}
});

const resetLeaderBoard = (id) => {
	const part = participants[id - 1];
	const index = leaderBoard.findIndex((item) => item.id === id);
	console.log(index);
	if (index === undefined) leaderBoard.push(part);
	else leaderBoard.splice(index, 1, part);
	leaderBoard.sort(function (a, b) {
		return b.iterationCount - a.iterationCount;
	});
	document.getElementById('td1').innerHTML = leaderBoard[0].id;
	document.getElementById('td2').innerHTML = leaderBoard[0].iterationCount;
	document.getElementById('td3').innerHTML = leaderBoard[0].id;
	document.getElementById('td4').innerHTML = leaderBoard[0].iterationCount;
	document.getElementById('td5').innerHTML = leaderBoard[0].id;
	document.getElementById('td6').innerHTML = leaderBoard[0].iterationCount;
	document.getElementById('td7').innerHTML = leaderBoard[0].id;
	document.getElementById('td8').innerHTML = leaderBoard[0].iterationCount;
	document.getElementById('td9').innerHTML = leaderBoard[0].id;
	document.getElementById('td10').innerHTML = leaderBoard[0].iterationCount;
	document.getElementById('td11').innerHTML = leaderBoard[0].id;
	document.getElementById('td12').innerHTML = leaderBoard[0].iterationCount;
	document.getElementById('td13').innerHTML = leaderBoard[0].id;
	document.getElementById('td14').innerHTML = leaderBoard[0].iterationCount;
	document.getElementById('td15').innerHTML = leaderBoard[0].id;
	document.getElementById('td16').innerHTML = leaderBoard[0].iterationCount;
	document.getElementById('td17').innerHTML = leaderBoard[0].id;
	document.getElementById('td18').innerHTML = leaderBoard[0].iterationCount;
	document.getElementById('td19').innerHTML = leaderBoard[0].id;
	document.getElementById('td20').innerHTML = leaderBoard[0].iterationCount;
	return leaderBoard.slice(0, 10);
};
