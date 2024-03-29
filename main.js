#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2106;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin code",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "What you want to do",
            type: "list",
            choices: ["Withdraw", "Check balance"],
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdrawlType = await inquirer.prompt([
            {
                name: "withdrawl",
                message: "please select type of withdrawl",
                type: "list",
                choices: ["Fast cash ", "Cash withdraw"],
            }
        ]);
        if (withdrawlType.withdraw === "Fast cash")
            console.log("Fast cash");
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select amount to withdraw:",
                type: "list",
                choices: ["500", "1000", "5000", "10000"],
            }
        ]);
        if (fastCashAmount.fastcash === "500") {
            console.log("your remaining balance is: ", myBalance - 500);
        }
        else if (fastCashAmount.fastcash === "1000") {
            console.log("your remaining balance is: ", myBalance - 1000);
        }
        else if (fastCashAmount.fastcash === "5000") {
            console.log("your remaining balance is: ", myBalance - 5000);
        }
        else if (fastCashAmount.fastcash === "10000") {
            console.log("your remaining balance is: ", myBalance - 10000);
        }
        else if (withdrawlType.withdraw === "Cash withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your withdrawal amount",
                    type: "number",
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Amount is insufficient!");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`Your remainning balance is: ${myBalance}`);
            }
        }
        else if (operationAns.operation === "Check balance") {
            console.log(`Your balance is:  ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin code");
}
