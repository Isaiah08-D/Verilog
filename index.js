const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log('GET /');
	res.sendFile(`${__dirname }/html/index.html`);
});

app.listen(3000, () => {
	console.log('server started');
});
