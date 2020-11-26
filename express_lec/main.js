const express = require('express');
const app = express();
const fs = require('fs');
const compression = require('compression');
const session = require('express-session');
const FileStore = require('session-file-store')(session)
const helmet = require('helmet');
app.use(helmet());



const template = require('./lib/template.js');
const bodyParser = require('body-parser');
const port = 3000;

//static file
app.use(express.static('public'));

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', function (req, res, next) {
  fs.readdir('./data', function (error, filelist) {
    req.list = filelist;
    next();
  });
});
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new FileStore()
}));

var passport = require('./lib/passport')(app);

//routing
const indexRouter = require('./routes/index')
const topicRouter = require('./routes/topic')
const authRouter = require('./routes/auth')(passport);

app.use('/', indexRouter);
app.use('/topic', topicRouter); //topic으로 시작하는 페이지에 topicRouter 미들웨어를 적용하겠다.
app.use('/auth', authRouter);

app.use(function (req, res, next) {
  res.status(404).send('Sorry Cant find that');
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})