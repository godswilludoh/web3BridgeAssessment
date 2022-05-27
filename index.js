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
		name: '',
	},
	{
		id: 2,
		startTime: 0,
		iterationCount: 0,
		name: '',
	},
	{
		id: 3,
		startTime: 0,
		iterationCount: 0,
		name: '',
	},
	{
		id: 4,
		startTime: 0,
		iterationCount: 0,
		name: '',
	},
	{
		id: 5,
		startTime: 0,
		iterationCount: 0,
		name: '',
	},
	{
		id: 6,
		startTime: 0,
		iterationCount: 0,
		name: '',
	},
	{
		id: 7,
		startTime: '',
		iterationCount: 0,
		name: '',
	},
	{
		id: 8,
		startTime: 0,
		iterationCount: 0,
		name: '',
	},
	{
		id: 9,
		startTime: 0,
		iterationCount: 0,
		name: '',
	},
	{
		id: 10,
		iterationCount: 0,
	},
	{
		id: 11,
		startTime: 0,
		iterationCount: 0,
		name: '',
	},
	{
		id: 12,
		startTime: 0,
		iterationCount: 0,
		name: '',
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
		name: '',
	},
	{
		id: 15,
		startTime: 0,
		iterationCount: 0,
		name: '',
	},
];

startIteration1.addEventListener('click', () => {
	const id = document.getElementById('iteration1').value;
	participants[id - 1].startTime = new Date();
	participants[id - 1].name = document.getElementById('name1').value;
	let time = 30;
	const setTime = setInterval(() => {
		time -= 1;
		document.getElementById('count1').innerText = time;
	}, 1000);
	setTimeout(() => {
		clearInterval(setTime);
	}, 30000);
});

finishIteration1.addEventListener('click', () => {
	const id = document.getElementById('iteration1').value;
	const seconds = participants[id - 1].startTime.getTime() / 1000;
	const currentTime = new Date().getTime() / 1000;
	console.log(id, seconds);
	if (currentTime >= seconds + 30) {
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
	} else {
		participants[id - 1].startTime = new Date();
		let time = 30;
		const setTime = setInterval(() => {
			time -= 1;
			document.getElementById('count2').innerText = time;
		}, 1000);
		setTimeout(() => {
			clearInterval(setTime);
		}, 30000);
	}
});

finishIteration2.addEventListener('click', () => {
	const id = document.getElementById('iteration2').value;
	const seconds = participants[id - 1].startTime.getTime() / 1000;
	console.log(seconds);
	const currentTime = new Date().getTime() / 1000;
	if (participants[id - 1].iterationCount === 1) {
		if (currentTime >= seconds + 30) {
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
		alert('you have to finish iteration 2');
	} else {
		participants[id - 1].startTime = new Date();
		let time = 30;
		const setTime = setInterval(() => {
			time -= 1;
			document.getElementById('count3').innerText = time;
		}, 1000);
		setTimeout(() => {
			clearInterval(setTime);
		}, 30000);
	}
});

finishIteration3.addEventListener('click', () => {
	const id = document.getElementById('iteration3').value;
	const seconds = participants[id - 1].startTime.getTime() / 1000;
	const currentTime = new Date().getTime() / 1000;
	if (participants[id - 1].iterationCount === 2) {
		if (currentTime >= seconds + 30) {
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
		alert('you have to finish iteration 3');
	} else {
		participants[id - 1].startTime = new Date();
		let time = 30;
		const setTime = setInterval(() => {
			time -= 1;
			document.getElementById('count4').innerText = time;
		}, 1000);
		setTimeout(() => {
			clearInterval(setTime);
		}, 30000);
	}
});

finishIteration4.addEventListener('click', () => {
	const id = document.getElementById('iteration4').value;
	const seconds = participants[id - 1].startTime.getTime() / 1000;
	const currentTime = new Date().getTime() / 1000;
	if (participants[id - 1].iterationCount === 3) {
		if (currentTime >= seconds + 30) {
			participants[id - 1].iterationCount = 4;
			resetLeaderBoard(id);
		} else {
			alert('Countdown to iteration 4 in progress');
		}
	}
});

const resetLeaderBoard = (id) => {
	const part = participants[id - 1];
	const index = leaderBoard.findIndex((item) => item.id === part.id);
	console.log(index);
	if (index === -1) leaderBoard.push(part);
	else leaderBoard.splice(index, 1, part);
	leaderBoard.sort(function (a, b) {
		return b.iterationCount - a.iterationCount;
	});
	document.getElementById('td1').innerHTML = leaderBoard[0].id;
	document.getElementById('td2').innerHTML = leaderBoard[0].iterationCount;
	document.getElementById('td3').innerHTML = leaderBoard[0].name;

	document.getElementById('td4').innerHTML = leaderBoard[1].id;
	document.getElementById('td5').innerHTML = leaderBoard[1].iterationCount;
	document.getElementById('td6').innerHTML = leaderBoard[1].name;

	document.getElementById('td7').innerHTML = leaderBoard[2].id;
	document.getElementById('td8').innerHTML = leaderBoard[2].iterationCount;
	document.getElementById('td9').innerHTML = leaderBoard[2].name;

	document.getElementById('td10').innerHTML = leaderBoard[3].id;
	document.getElementById('td11').innerHTML = leaderBoard[3].iterationCount;
	document.getElementById('td12').innerHTML = leaderBoard[3].name;

	document.getElementById('td13').innerHTML = leaderBoard[4].id;
	document.getElementById('td14').innerHTML = leaderBoard[4].iterationCount;
	document.getElementById('td15').innerHTML = leaderBoard[4].name;

	document.getElementById('td16').innerHTML = leaderBoard[5].id;
	document.getElementById('td17').innerHTML = leaderBoard[5].iterationCount;
	document.getElementById('td18').innerHTML = leaderBoard[5].name;

	document.getElementById('td19').innerHTML = leaderBoard[6].id;
	document.getElementById('td20').innerHTML = leaderBoard[6].iterationCount;
	document.getElementById('td21').innerHTML = leaderBoard[6].name;

	document.getElementById('td22').innerHTML = leaderBoard[7].id;
	document.getElementById('td23').innerHTML = leaderBoard[7].iterationCount;
	document.getElementById('td24').innerHTML = leaderBoard[7].name;

	document.getElementById('td25').innerHTML = leaderBoard[8].id;
	document.getElementById('td26').innerHTML = leaderBoard[8].iterationCount;
	document.getElementById('td27').innerHTML = leaderBoard[8].name;

	document.getElementById('td28').innerHTML = leaderBoard[9].id;
	document.getElementById('td29').innerHTML = leaderBoard[9].iterationCount;
	document.getElementById('td30').innerHTML = leaderBoard[9].name;

	return leaderBoard.slice(0, 10);
};
