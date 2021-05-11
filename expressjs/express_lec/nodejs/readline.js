console.log('start');

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

let num1=Math.floor(Math.random()*10+1);
let num2=Math.floor(Math.random()*10+1);
let answer = num1+num2 ;


let count=0;
let hope=10;


    rl.question(`What is ${num1} + ${num2} ? \n`, (userInput) => {

        if(userInput.trim()==answer){   
            rl.close();
        }else{
            rl.setPrompt('Incorrect response please try again\n');
            rl.prompt();
            rl.on('line',(userInput)=>{
                if(userInput.trim()==answer){
                    rl.close();
                }else{
                    rl.setPrompt('Incorrect response please try again\n');
                    rl.prompt();
                }
            })
        }
    
    });
    
    rl.on('close',()=>{
        console.log('Congraturation! Correct Answer!');
        rl.pause()
        setTimeout(() => { 
            {console.log('wait');
            rl.close();}
            
        }, 1000);
    });

    rl.on('close',()=>{
        console.log('happy');
    })





// rl.on("line", (args) => {
//     const result = args.split(" ").reduce((p, c) => parseInt(p) + parseInt(c), 0);
//     console.log(result);
//     rl.close();
// });


