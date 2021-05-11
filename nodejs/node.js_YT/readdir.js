//파일 목록을 배열로 출력

var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder,function(error,filelist){
console.log(filelist);

} )
