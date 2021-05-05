require('dotenv/config');
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const PORT = process.env.SERVER_PORT || 5000;

app.get('/', function(req, res) {
    res.send('Blog _API')
})

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))