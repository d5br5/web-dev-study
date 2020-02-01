var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
var template = require("./lib/template.js");
var path = require("path");

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryFull = url.parse(_url, true);
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    console.log("$$_url=", _url);
    console.log("$$queryFull=", queryFull);
    console.log("$$queryData=", queryData);
    console.log("$$pathname=", pathname);
    console.log("");
    
    if (pathname === "/") {
        if (queryData.id === undefined) {
            fs.readdir("./data", function (error, filelist) {
                var title = "Welcome";
                var description = "Hello, Node.js";
                var list = template.list(filelist);
                var html = template.html(
                    title,
                    list,
                    `
        <h2>${title}</h2>
        <p>${description}</p>
        `,
                    '<h1><a href="/create">create</a>'
                );
                response.writeHead(200);
                response.end(html);
            });
        } else {
            fs.readdir("./data", function (error, filelist) {
                var filteredId = path.parse(queryData.id).base;
                fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
                    var title = filteredId;
                    var list = template.list(filelist);
                    var html = template.html(
                        title,
                        list,
                        `
          <h2>${title}</h2>
          <p>${description}</p>
          `, `<h1><a href="/create">create</a>
          <a href="/update?id=${title}">update</a>
          <form action="/delete_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <input type="submit" value="delete">
          </form>`
                    );
                    response.writeHead(200);
                    response.end(html);
                });
            });
        }
    } else if (pathname === "/create") {
        fs.readdir("./data", function (error, filelist) {
            var title = "Create";

            var list = template.list(filelist);
            var html = template.html(
                title,
                list,
                `
        <form action="/create_process" method="post">
      <p><input type="text" name="title" placeholder="title"></p>
      <p>
        <textarea name="description" placeholder="text"></textarea>
      </p>

      <p>
        <input type="submit">
      </p>
      </form>
`,
                '<h1><a href="/create">create</a>'
            );
            response.writeHead(200);
            response.end(html);
        });
    } else if (pathname === "/create_process") {
        var body = "";
        request.on("data", function (data) {
            body += data;
        });
        request.on("end", function () {
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`, description, "utf8", function (err) {
                response.writeHead(302, {
                    Location: `/?id=${title}`
                });
                response.end("success");
            });
        });
    } else if (pathname === "/update") {
        fs.readdir("./data", function (error, filelist) {
            var filteredId = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
                var title = filteredId;
                var list = template.list(filelist);
                var html = template.html(title, list,
                    `
          <form action="/update_process" method="post">
          <input type="hidden" name="id" value="${title}"
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
        <p>
          <textarea name="description" placeholder="text">${description}</textarea>
        </p>

        <p>
          <input type="submit">
        </p>
        </form>
  `, `<h1><a href="/create">create</a><a href="/update?id=${title}">update</a>`
                );
                response.writeHead(200);
                response.end(html);
            });
        });


    } else if (pathname === '/update_process') {
        var body = "";
        request.on("data", function (data) {
            body += data;
        });
        request.on("end", function () {
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;
            fs.rename(`data/${id}`, `data/${title}`, function (error) {
                fs.writeFile(`data/${title}`, description, "utf8", function (err) {
                    response.writeHead(302, {
                        Location: `/?id=${title}`
                    });
                    response.end("success");
                });
            });
            console.log(post);

        });

    } else if (pathname === '/delete_process') {
        var body = "";
        request.on("data", function (data) {
            body += data;
        });
        request.on("end", function () {
            var post = qs.parse(body);
            var id = post.id;
            var filteredId = path.parse(id).base;
            fs.unlink(`data/${filteredId}`, function (error) {
                response.writeHead(302, {
                    Location: `/`
                });
                response.end("success");
            })


        });
    } else {
        response.writeHead(404);
        response.end("Not found");
    }
});
app.listen(3000);
