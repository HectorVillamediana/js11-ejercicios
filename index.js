import { fullCountries } from "./arrays/countries_data.js"
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Mongolia", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
};
const users = [
    {
        name: "Brook",
        scores: 75,
        skills: ["HTM", "CSS", "JS"],
        age: 16,
    },
    {
        name: "Alex",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "David",
        scores: 75,
        skills: ["HTM", "CSS"],
        age: 22,
    },
    {
        name: "John",
        scores: 85,
        skills: ["HTML"],
        age: 25,
    },
    {
        name: "Sara",
        scores: 95,
        skills: ["HTM", "CSS", "JS"],
        age: 26,
    },
    {
        name: "Martha",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "Thomas",
        scores: 90,
        skills: ["HTM", "CSS", "JS"],
        age: 20,
    },
];
//============================NIVEL 1=======================================================

//===================================1======================================================

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e);
console.log(pi);
console.log(gravity);
console.log(humanBodyTemp);
console.log(waterBoilingTemp);
console.log(constants);

//===================================2======================================================

let [fin, est, sw, den, nor] = countries
console.log(fin);
console.log(est);
console.log(sw);
console.log(den);
console.log(nor);
console.log(countries);

//====================================3=====================================================

let { width, height, area, perimeter } = rectangle
console.log(width);
console.log(height);
console.log(area);
console.log(perimeter);
console.log(rectangle);

//================================NIVEL 2===================================================
//=====================================1====================================================
const usersData = users.forEach((count) => {
    let { name, scores, skills, age } = count
    console.log(name);
    console.log(scores);
    console.log(skills.toString());
    console.log(age);
    return count
})

//=================================2========================================================

const usersLess2 = users.forEach((user) => {
    let { name } = user
    if (user.skills.length < 2) {
        console.log(user.name);
    }
    return
});
console.log(usersLess2);

//================================NIVEL 3===================================================

//===================================1======================================================

const country = fullCountries.forEach((count) => {
    let { name, capital, languages, population, flag, currency } = count
    console.log(name);
    console.log(capital);
    console.log(languages);
    console.log(population);
    console.log(flag);
    console.log(currency);
    return count
})
console.log(country);
//==================================2======================================================

/*const students = 
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
    let [name, [...skills], [ , , jsScore, reactScore]] = students
    console.log(name, skills, jsScore, reactScore);*/

    //==================================3======================================================

    const students = [
        ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
        ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
      ];
      
    const convertArrayToObject = function () {
        let [student1, student2] = students
        let [name, [...skills], [...score]] = student1
        let [name_, [...skills_], [...score_]] = student2
        let studentObj = { }
        studentObj.name = name
        studentObj.score = score
        studentObj.skills = skills
        studentObj.name2 = name_
        studentObj.score2 = score_
        studentObj.skills2 = skills_
        return studentObj
    }
    console.log(convertArrayToObject());

    //==================================4======================================================

    const student = {
        name: "David",
        age: 25,
        skills: {
          frontEnd: [
            { skill: "HTML", level: 10 },
            { skill: "CSS", level: 8 },
            { skill: "JS", level: 8 },
            { skill: "React", level: 9 },
          ],
          backEnd: [
            { skill: "Node", level: 7 },
            { skill: "GraphQL", level: 8 },
          ],
          dataBase: [{ skill: "MongoDB", level: 7.5 }],
          dataScience: ["Python", "R", "D3.js"],
        },
      };

      student.skills.frontEnd.push({skill: "Bootstrap", level: 8})
      student.skills.backEnd.push({skill: "Express", level: 9})
      student.skills.dataBase.push({skill: "SQL", level: 8})
      student.skills.dataBase.push({skill: "SQL"})
      console.log(student.skills);