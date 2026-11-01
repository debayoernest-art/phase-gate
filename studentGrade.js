
const prompt = require("prompt-sync")();

console.log("\n========== STUDENT GRADE MANAGEMENT ==========");

let students = Number(prompt("How many students do you have? "));
let subjects = Number(prompt("How many subjects do they offer? "));

let studentNames = [];
let subjectNames = [];
let scores = [];

for (let i = 0; i < students; i++) {
 let name = prompt(`Enter student ${i + 1} name: `);
    studentNames.push(name);

}


for (let j = 0; j < subjects; j++) {

    let subject = prompt(`Enter subject ${j + 1}: `);
    subjectNames.push(subject);

}


for (let i = 0; i < students; i++) {

    let studentScores = [];

    console.log(`\nEnter scores for ${studentNames[i]}`);

    for (let j = 0; j < subjects; j++) {

        let score = Number(prompt(`${subjectNames[j]}: `));

        while (score < 0 || score > 100) {

            console.log("Invalid score! Enter between 0 and 100.");

            
}

        studentScores.push(score);

    }

    scores.push(studentScores);

}



    let total = 0;

   

        total += scores[i][j];

    

    let average = total / subjects;

 console.log(total + average);
   



