const express = require(`express`);
const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(5000, () => {
  console.log('server is started at 5000');
});
