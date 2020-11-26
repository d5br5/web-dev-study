var express = require('express')
var router = express.Router()
const path = require('path');
const fs = require('fs');
const sanitizeHtml = require('sanitize-html');
const template = require('../lib/template.js');

module.exports = function (passport) {
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

  router.post('/login_process',
    passport.authenticate('local', { failureRedirect: '/auth/login' }),
    function (req, res) {
      console.log(req.user);
      req.session.save(function () {
        console.log('success');
        res.redirect('/');
      });
    });

  router.get('/logout', function (req, res) {
    req.logout();
    req.session.save(function () {
      res.redirect('/');
    })
  });
  return router;
}
