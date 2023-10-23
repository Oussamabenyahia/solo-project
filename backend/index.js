const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const port = 3000;
const app = express();
const Route = require("./routes/Jobs");

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/jobs', Route);
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
