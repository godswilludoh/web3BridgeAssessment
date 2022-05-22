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
	let index;
	const id = document.getElementById('iteration1');
	participants.find((x, i) => {
		if (x.id === id) return x;
		i = index;
		return x;
	});
	participants[index].startTime = new Date();
});

finishIteration1.addEventListener('click', () => {
	const id = document.getElementById('iteration1');
	let index;
	const part = participants.find((x, i) => {
		i = index;
		if (x.id === id) return x;
		return x;
	});
	const seconds = part.startTime.getTime() / 1000;
	const currentTime = new Date().getTime() / 1000;
	if (currentTime >= seconds + 3600) {
		participants[index].iterationCount = 1;
		resetLeaderBoard(id);
	} else {
		console.log('Countdown to iteration 1 in progress');
	}
});

startIteration2.addEventListener('click', () => {
	let index;
	const id = document.getElementById('iteration2');
	participants.find((x, i) => {
		if (x.id === id) return x;
		i = index;
		return x;
	});
	if (participants[index].iterationCount !== 1) {
		console.log('you have to finish iteration 1');
	} else participants[index].startTime = new Date();
});

finishIteration2.addEventListener('click', () => {
	let index;
	const id = document.getElementById('iteration2');
	const part = participants.find((x, i) => {
		i = index;
		if (x.id === id) return x;
		return x;
	});
	const seconds = part.startTime.getTime() / 1000;
	const currentTime = new Date().getTime() / 1000;
	if (participants[index].iterationCount === 1) {
		if (currentTime >= seconds + 3600) {
			participants[index].iterationCount = 2;
			resetLeaderBoard(id);
		} else {
			console.log('Countdown to iteration 2 in progress');
		}
	}
});

startIteration3.addEventListener('click', () => {
	let index;
	const id = document.getElementById('iteration3');
	participants.find((x, i) => {
		if (x.id === id) return x;
		i = index;
		return x;
	});
	if (participants[index].iterationCount !== 2) {
		console.log('you have to finish iteration 2');
	} else participants[index].startTime = new Date();
});

finishIteration3.addEventListener('click', () => {
	let index;
	const id = document.getElementById('iteration3');
	const part = participants.find((x, i) => {
		i = index;
		if (x.id === id) return x;
		return x;
	});
	const seconds = part.startTime.getTime() / 1000;
	const currentTime = new Date().getTime() / 1000;
	if (participants[index].iterationCount === 2) {
		if (currentTime >= seconds + 3600) {
			participants[index].iterationCount = 3;
			resetLeaderBoard(id);
		} else {
			console.log('Countdown to iteration 3 in progress');
		}
	}
});

startIteration4.addEventListener('click', () => {
	let index;
	const id = document.getElementById('iteration4');
	participants.find((x, i) => {
		if (x.id === id) return x;
		i = index;
		return x;
	});
	if (participants[index].iterationCount !== 3) {
		console.log('you have to finish iteration 3');
	} else participants[index].startTime = new Date();
});

finishIteration4.addEventListener('click', () => {
	let index;
	const id = document.getElementById('iteration4');
	const part = participants.find((x, i) => {
		i = index;
		if (x.id === id) return x;
		return x;
	});
	const seconds = part.startTime.getTime() / 1000;
	const currentTime = new Date().getTime() / 1000;
	if (participants[index].iterationCount === 3) {
		if (currentTime >= seconds + 3600) {
			participants[index].iterationCount = 4;
			resetLeaderBoard(id);
		} else {
			console.log('Countdown to iteration 4 in progress');
		}
	}
});

const resetLeaderBoard = (id) => {
	const part = participants.find((x, i) => {
		if (x.id === id) return x;
		return x;
	});
	const index = leaderBoard.findIndex((item) => item.id === id);
	if (index === undefined) leaderBoard.push(part);
	else leaderBoard.splice(index, 1, part);
	leaderBoard.sort(function (a, b) {
		return b.iterationCount - a.iterationCount;
	});
	return leaderBoard.slice(0, 10);
};
