const express = require('express');
const cors = require('cors');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/testing', async (req, res) => {
  console.log('HIT TESTING ENDPOINT');
  res.send(200)
})

app.listen(PORT, () => {
  console.log(`CONNECTED AT PORT: ${PORT}`)
});