const express = require('express');
const app = express();
const fs = require('fs');
const qs = require('querystring');
const compression = require('compression');
const session = require('express-session');
const FileStore = require('session-file-store')(session)
const sanitizeHtml = require('sanitize-html');
const helmet = require('helmet');
app.use(helmet());
const flash=require('connect-flash');


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

//passport
var authData = {
  email: 'happy@gmail.com',
  password: '1111',
  nickname: 'doh'
};

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.get('/flash', function(req, res){
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash('msg', 'Flash is back!!!')
  res.send('flash');
});

app.get('/flash-display', function(req, res){
  // Get an array of flash messages by passing the key to req.flash()
  var fmsg=req.flash();
  console.log(fmsg);
  res.send(fmsg);
  //res.render('index', { messages: req.flash('info') });
});

passport.serializeUser(function(user, done) {
  console.log('serializeUser',user);
  done(null, user.email);
});

passport.deserializeUser(function(id, done) {
  console.log('deserializeUser',id);
  done(null, authData); // authData => req.user
});

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session:true
  },
  function (username, password, done) {
    console.log('LocalStrategy', username, password);
    if (username === authData.email) {
      console.log(1);
      if (password === authData.password) {
        console.log(2);
        return done(null, authData);
      } else {
        console.log(3);
        return done(null, false, { message: 'Incorrect password.' });
      }
    } else {
      console.log(4);
      return done(null, false, { message: 'Incorrect username.' });
    }
  }
));

// app.post('/auth/login_process',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/auth/login'
//   }));

app.post('/auth/login_process',
  passport.authenticate('local',{failureRedirect: '/auth/login'}),
  function (req, res) {
    console.log(req.user);
    req.session.save(function () {
            console.log('success');
            res.redirect('/');
          });
    });
  

//routing
const indexRouter = require('./routes/index')
const topicRouter = require('./routes/topic')
const authRouter = require('./routes/auth')

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