var a=function(){
  console.log('A');
}

function slowfunc(callback){
  console.log('1');
  console.log('2');
  callback();
}

slowfunc(a);
