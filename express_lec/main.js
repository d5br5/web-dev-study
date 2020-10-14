const express =require('express');
const app=express();
const fs=require('fs');
const path = require('path');
const sanitizeHtml = require('sanitize-html');
const template = require('./lib/template.js');
const port=3000;


//routing
app.get('/',(req,res)=>{
  fs.readdir('./data', function(error, filelist){
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(filelist);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="/create">create</a>`
    );
    res.send(html);
  });
});

app.get('/page/:pageId',(req,res)=>{  
    fs.readdir('./data', function(error, filelist){
      var filteredId = path.parse(req.params.pageId).base;
      fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
        var title = req.params.pageId;
        var sanitizedTitle = sanitizeHtml(title);
        var sanitizedDescription = sanitizeHtml(description, {
          allowedTags:['h1']
        });
        var list = template.list(filelist);
        var html = template.HTML(sanitizedTitle, list,
          `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
          ` <a href="/create">create</a>
            <a href="/update?id=${sanitizedTitle}">update</a>
            <form action="delete_process" method="post">
              <input type="hidden" name="id" value="${sanitizedTitle}">
              <input type="submit" value="delete">
            </form>`
        );
        res.send(html);
      });
    });   
  });



app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`);
})

