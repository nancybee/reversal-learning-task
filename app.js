var root = document.getElementById('root');

var trial = {
	// edit this value to change
	// how many times the experiment runs
	limit: 10,
	initials: '',
	pointsEarned: 0,
	circleA: {
		timesChosen: 0,
		successRate: 0.75,
		pointValue: 3
	},
	circleB: {
		timesChosen: 0,
		successRate: 0.25,
		pointValue: 9
	}
};

function addKeydown(fn) {
	document.addEventListener('keydown', fn);
}

function removeKeydown(fn) {
	document.removeEventListener('keydown', fn);
}

function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

function makeIntro() {
	removeKeydown(makeIntro);

	trial.initials = prompt('Please enter your initials');

	var instructions = '<h1>In this experiment, a cross will appear on the center of the screen. When it disappears, choose either the <b>blue circle by pressing F</b>, or the <b>orange circle by pressing J</b>.</h1><h1>Press any key to begin</h1>';

	root.innerHTML = instructions;

	addKeydown(showCross);
}

function showCross() {
	removeKeydown(showCross);

	var numberRange = getRandomNumber(0.5, 1.5) * 1000;
	var circles = document.getElementById('circles');
	var cross = document.getElementById('cross');
	var circle1 = document.getElementById('circle1');
	var circle2 = document.getElementById('circle2');

	root.innerHTML = '';
	circles.style.display = 'block';
	cross.style.display = 'block';

	setTimeout(function () {
		cross.style.display = 'none';
		circle1.style.display = 'block';
		circle2.style.display = 'block';

		addKeydown(listenForCircleSelection);
	}, numberRange);
}

function listenForCircleSelection(e) {
	if (e.code === 'KeyF') {
		handleCircleSelection(trial.circleA);
	} else if (e.code === 'KeyJ') {
		handleCircleSelection(trial.circleB);
	} else {
		return;
	}

	circle1.style.display = 'none';
	circle2.style.display = 'none';

	setTimeout(showCross, 1000);
}

function concludeExperiment() {
	document.body.innerHTML = `
		<h3>You pressed Circle A ${trial.circleA.timesChosen} times</h3>
		<h3>You pressed Circle B ${trial.circleB.timesChosen} times</h3>
		<h3>You've earned a total of ${trial.pointsEarned} points</h3>

		<h1>The experiment has concluded.</h1>
		<h1>Thank you for your participation, ${trial.initials}.</h1>
	`;

	$.ajax('/results', {
		method: 'POST',
		data: JSON.stringify(trial)
	})
	.then(function (res) {
		console.log(res);
	});
}

function handleCircleSelection(circle) {
	circle.timesChosen += 1;

	if (Math.random() <= circle.successRate) {
		trial.pointsEarned += circle.pointValue;
		displayPointsToUser(circle.pointValue, trial.pointsEarned);
	} else {
		displayPointsToUser(0, trial.pointsEarned);
	}
}

function displayPointsToUser(points, totalPoints) {
	swal({
		title: `You have earned ${points} points!`,
		text: `Total points: ${totalPoints}`,
		onClose: function () {
			if (trial.circleA.timesChosen + trial.circleB.timesChosen === trial.limit) {
				concludeExperiment();
			}
		}
	})
}

document.addEventListener('keydown', makeIntro);
