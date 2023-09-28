const express = require('express')

const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('test'))

app.listen(port, () => console.log(`Application démarrée sur : http://localhost ${port}!`))