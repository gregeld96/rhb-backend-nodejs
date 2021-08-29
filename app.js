require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const IP = process.env.IP || 'localhost';
const routes = require('./routes');
const errorHandler = require('./middlewares/error_handle');
const handlebars = require('express-handlebars');
const flash = require('express-flash');
const session = require('express-session');
const path = require('path');
const cron = require('node-cron');
const CronService = require('./services/cron');

app.use(cors());
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', handlebars({
  extname: 'hbs',
  defaultLayout: 'main',
  helpers: require('./helpers/handlebars-helpers.js')
}));

app.use(session({
  secret: 'secretkeyboard123456'
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, 'Public')));
app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});


app.use(routes);
app.use(errorHandler);

app.listen(PORT, IP, () => {
  console.log(`Server run on http://${IP}:${PORT}`)
})

cron.schedule('0 * * * *', () => {
  CronService.checkInComingEvent();
});