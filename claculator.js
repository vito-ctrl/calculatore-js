const prompt = require('prompt-sync')();
let quit = 1;
while(quit){
    console.log(`============ menu ================`);
    console.log(`=          Addition (+)          =`);
    console.log(`=         Subtraction (-)        =`);
    console.log(`=       Multiplication (/)       =`);
    console.log(`=          Division (*)          =`); 
    console.log(`=           Power (^)            =`);
    console.log(`=        Square root (<)         =`);
    console.log(`=         Factorial (!)          =`);
    console.log(`=            quit (0)            =`);
    console.log(`==================================`);
    const num1 = Number(prompt("entre num1 : "));
    const p = prompt(`parammeter : `);
    var num2
    if(p == '+' || p == '-' || p == '*' || p == '/' || p == '^'){
        num2 = Number(prompt("entre num2 : "));
    }
            switch (p){
        case "+":
            const sum = num1 + num2;
            console.log(`resolt is : ${sum}`);
            break
        case "-":
            const min = num1 - num2;
            console.log(`resolt is : ${min}`);
            break
        case "/":
                if(num1 == 0 || num2 == 0){
                console.log('error');
                break;
                }
            const dev = num1 / num2;
            console.log(`resolt is : ${dev}`);
            break;
        case "*":
            const f = num1 * num2;
            console.log(`resolt is : ${f}`);
            break
        case "^":
            const pui = Math.pow(num1, num2);
            console.log(`resolt is : ${pui}`);
            quit = 1;
            break
        case "<":
            if(num1 < 0){
                console.log(`error`);
            }
            if (num1 == p){
            
            }
            const squ = Math.sqrt(num1);
            console.log(`resolt is : ${squ}`);
            quit = 1;
            break;
        case "!":
            if(num1 < 0){
                console.log(`factorial can not be negative`);
            }
            if(num1 == 1 || num1 == 0){
                console.log(`factorial of ${num1} is 1`);
                break;
            }
            let resolt = 1;
            for(let i = 2; i <= num1; i++){
                resolt *= i;
            }
            console.log(`factorial of ${num1} is ${resolt}`);
            quit = 1;
            break;
        default:
            if(p == 0){
                quit = 0;
                break;
            }
            console.log(`false parameter`);
    }
}