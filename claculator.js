const prompt = require('prompt-sync')();
let quit = 1;
while(quit){
    console.log(`=============menu=================`);
    console.log(`=          Addition (+)          =`);
    console.log(`=         Subtraction (-)        =`);
    console.log(`=       Multiplication (/)       =`);
    console.log(`=          Division (*)          =`); 
    console.log(`=           Power (^)            =`);
    console.log(`=        Square root (<)         =`);
    console.log(`=         Factorial (!)          =`);
    console.log(`==================================`);

    const num1 = prompt("entre num1 : ");
    const p = prompt(`parammeter : `);

    switch (p){
        case "+":
            var num2 = prompt("entre num2 : ");
            const sum =Number(num1) + Number(num2);
            console.log(`resolt is : ${sum}`);
            quit = 1;
            break
        case "-":
            var num2 = prompt("entre num2 : ");
            const min = Number(num1) - Number(num2);
            console.log(`resolt is : ${min}`);
            quit = 1;
            break
        case "/":
            var num2 = prompt("entre num2 : ");
            if(num1 == 0 || num2 == 0){
                console.log(`wach nta mklkh baghi t9ssm 3la 0 `);
                break;
            }
            const dev = Number(num1) / Number(num2);
            console.log(`resolt is : ${dev}`);
            quit = 1;
            break
        case "*":
            var num2 = prompt("entre num2 : ");
            const f = Number(num1) * Number(num2);
            console.log(`resolt is : ${f}`);
            quit = 1;
            break
        case "^":
            var num2 = prompt("entre num2 : ");
            const pui = Math.pow(num1, num2);
            console.log(`resolt is : ${pui}`);
            quit = 1;
            break
        case "<":
            const squ = Math.sqrt(num1);
            console.log(`resolt is : ${squ}`);
            quit = 1;
            break;
        case "!":
            if(num1 < 0){
                console.log(`factorial can not be negative`);
            }
            if(num1 == 1 || num1 == 0){
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
            console.log(`false parameter`);
        
        quit = 0;
    }
}
