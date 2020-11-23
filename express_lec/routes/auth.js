var express = require('express')
var router = express.Router()
const path = require('path');
const fs = require('fs');
const sanitizeHtml = require('sanitize-html');
const template = require('../lib/template.js');

var authData = {
  email: 'happy@gmail.com',
  password: '1111',
  nickname: 'doh'
}

router.get('/login', function (req, res) {
  var title = 'WEB - Login';
  var list = template.list(req.list);
  var html = template.HTML(title, list, `
    <form action="/auth/login_process" method="post">
      <p><input type="text" name="email" placeholder="email"></p>
      <p><input type="password" name="password" placeholder="password"></p>
      <p>
        <input type="submit" value="login">
      </p>
    </form>
  `, '');
  res.send(html);
});

router.post('/login_process', function (req, res) {
  var post = req.body;
  var email = post.email;
  var password = post.password;
  if (email === authData.email && password === authData.password) {
    req.session.is_logined = true;
    req.session.nickname = authData.nickname;
    req.session.save(function () {
      res.redirect(`/`);
    });
  } else {
    res.send('Whhooo?');
  }
  res.redirect(`/auth/`);

});

router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    req.redirect('/');
  })
});

module.exports = router;