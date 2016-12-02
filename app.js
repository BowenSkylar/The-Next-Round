/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */


require('dotenv').config();
const express                 = require('express');
const logger                  = require('morgan');
const path                    = require('path');
const bodyParser              = require('body-parser');
const methodOverride          = require('method-override');
const router = require('express').Router();
const cookieParser = require('cookie-parser');
const session = require('express-session');


const app = express();
const port = process.env.PORT || 5000;

const homeRouter = require('./routes/home');
const searchRouter = require('./routes/search');
const favoritesRoute = require('./routes/favorites');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');


const SECRET          = 'puppies3000';


app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET,
}));

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () => console.log('Well you didnt break it since its running on', port, '!!!!'));

app.use('/', homeRouter);
app.use('/search', searchRouter);
app.use('/favorites', favoritesRoute);
app.use('/auth', authRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.use('/users', userRouter);

