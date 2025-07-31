const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home/index.html');
});
app.get('/dev', (req, res) => {
  res.sendFile(__dirname + '/public/dev/index.html');
});
app.get('/game', (req, res) => {
  res.sendFile(__dirname + '/public/game/index.html');
});
app.get('/daily', (req, res) => {
  res.sendFile(__dirname + '/public/daily/index.html');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// 이건 테스트용입니다^^