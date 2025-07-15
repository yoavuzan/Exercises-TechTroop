import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question("what is your name ? ",(name)=>{
    rl.question("What is your Email ? ",(mail)=>{
        rl.question("What is your age ? ",(age)=>{
            rl.question("What is your Favorite Color ? ",(color)=>{
                console.log("Registration Summary:\n"+
                    `Name: ${name}\n`+
                    `Email: ${mail}\n`+
                    `Age: ${age}\n`+
                    `Color: ${color}\n`
                )
                rl.close();
            })
        })
    })
})