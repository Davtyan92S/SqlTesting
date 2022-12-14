const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/routes'));

app.listen(5000);
console.log('Server on port', 5000);