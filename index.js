const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(PORT, () => {
  console.log('server started at', PORT);
});