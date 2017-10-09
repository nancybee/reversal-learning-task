const path = require('path');
const express = require('express');
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
	console.log('body params:', req.body);
	return res.json({
		body: req.body
	});
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server is running. Please go to ${url}`));
