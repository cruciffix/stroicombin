const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

const mysql2 = require('mysql2/promise');

const pool = mysql2.createPool({
	host: 'localhost',
	user: 'root',
	database: 'stroicombin',
	password: '',
});

app.use(express.json());

const port = 3001;

app.get('/products', async (req, res) => {
	let [products] = await pool.query('SELECT * from products');
	res.json({ products });
});

app.listen(port, () => {
	console.log('listening port: ' + port);
	console.log('localhost/phpmyadmin');
});
