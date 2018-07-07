var express = require('express')
  , load = require('consign')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , error = require('./middleware/error')
  , mongoose = require('mongoose')
  , app = express();

mongoose.connect('mongodb://localhost/projetofinal');
global.db = mongoose.connection;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(cookieParser('projetoFinal'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

load().include('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.use(error.notFound);
app.use(error.serverError);

app.listen(3000, function () {
  console.log("Projeto no Ar!");
});