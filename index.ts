#!/usr/bin/env node
import inquirer from "inquirer"

const quiz: {
    question_1:string;
    question_2:string;
    question_3:string;
    question_4:string;
    question_5:string;
} = await inquirer.prompt([
    {
        name:"question_1",
        type:"list",
        choices:["HTML","CSS","JAVASCRIPT","TYPESCRIPT"],
        message:"what is your favourite programming language?"
    },
    {
        name:"question_2",
        type:"list",
        choices:["yes","no"],
        message:"Do you want to learn web development?"
    },
    {
        name:"question_3",
        type:"list",
        choices:["yes","no"],
        message:"Do you want to learn React.js?"
    },
    {
        name:"question_4",
        type:"list",
        choices:["yes","no"],
        message:"Do you want to learn Node.js?"
    },
    {
        name:"question_5",
        type:"list",
        choices:["yes","no"],
        message:"Do you want to learn Express.js?"
    }
])
    
let score = 0;

switch(quiz.question_1){
    case "HTML":
        console.log("Great choice!");
        ++score;

        break;
        default:
            console.log("Wrong choice!");
}
switch(quiz.question_2){
    case "yes":
        console.log("Great choice!");
        ++score;

        break;
        default:
            console.log("Wrong choice!");

}  
switch(quiz.question_3){
    case "yes":
        console.log("Great choice!");
        ++score;

        break;
        default:
            console.log("Wrong choice!");

}
switch(quiz.question_4){
    case "yes":
        console.log("Great choice!");
        ++score;

        break;
        default:
            console.log("Wrong choice!");

} 
switch(quiz.question_5){
    case "yes":
        console.log("Great choice!");
        ++score;

        break;
        default:
            console.log("Wrong choice!");

}  
console.log(`Your total score is ${score}/5`);  
if(score === 5){
    console.log("You are a Web Developer!");
}  
else if(score === 4){
    console.log("You are a Node.js Developer!");
}  
else if(score === 3){
    console.log("You are a React.js Developer!");
}   
else if(score === 2){
    console.log("You are a Express.js Developer!");
}
else if(score === 1){
    console.log("You are a HTML Developer!");
}
else{
    console.log("You are a Beginner!");
}






