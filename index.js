const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeDatabase } = require("./db/db.connect");
const { addVideosToDB } = require('./models/videos.model');
const { addUserCredToDB } = require('./models/userCredentials.model');
const video = require('./routes/videos.route');
const userCredentail = require('./routes/userCredentials.route');
const userDetail = require('./routes/userDetails.route');
const { errorHandler } = require('./middlewares/error-handler.middleware');
const { routeNotFound } = require('./middlewares/route-not-found.middleware');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());

initializeDatabase();

// addVideosToDB();
// addUserCredToDB();

app.use('/videos', video);
app.use('/auth', userCredentail);
app.use('/userDetails', userDetail);

app.get('/', (req, res) => {
  res.send('Hello preTube!')
});

app.use(errorHandler);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log('server started at', PORT);
});