var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");

var template= {
  html:function(title, list, _body, control) {
    return `
  <!doctype html>
  <html>
  <head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
  </head>
  <body>
  <h1><a href="/">WEB2</a></h1>
  ${list}
  ${control}
  ${_body}
  </body>
  </html>
  `;
}, list:function(filelist) {
  var i = 0;
  var list = `<ul>`;
  while (i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + "</ul>";
  return list;
}
}

module.exports = template;
