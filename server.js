const path = require('path');
const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const url = `http://localhost:${PORT}`;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.post('/results', (req, res) => {
	console.log('got this request:', req.body);

	const fs = require('fs');
	const { circleA, circleB, initials, limit, pointsEarned } = req.body;


// intentionally writing it like this to avoid
// weird .txt formatting
	const fileString =
`Initials: ${initials}\n
Circle A: ${circleA.timesChosen}\n
Circle B: ${circleB.timesChosen}\n
Trials: ${limit}\n
Points Earned: ${pointsEarned}`;

	const dir = './results';
	const filename = `${initials}: ${moment().format('M-D-YY, h:mm a')}`

	if (!fs.existsSync(dir)){
	    fs.mkdirSync(dir);
	}

	fs.writeFileSync(`results/${filename}.txt`, fileString);

	console.log('file has been written');

	return res.json({
		success: true,
		message: 'File has been written'
	});
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server is running. Please go to ${url}`));
