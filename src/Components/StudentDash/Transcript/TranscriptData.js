const grading = (marks) =>{
    if(marks < 40){
        return "E";
    }else if(marks <= 50 && marks >=40){
        return "D";
    }else if(marks <= 60 && marks >=51){
        return "C";
    }else if(marks <= 70 && marks >=61){
        return "B";
    }else if(marks <= 100 && marks >=71){
        return "A";
    }
}

let grade = "";
let randomMark = 0;
const marksGuessing = (newRandomNumber) =>{
    if(newRandomNumber){
        randomMark = Math.floor(Math.random() * 100)
        grade = grading(randomMark);
    }

    return [randomMark, grade];
}

let marks = [
    // marks[0]
    [
    {
        unitCode: "SCS 101",
        unitName: "HIV/AIDS",
        unitMarks: marksGuessing(true)[0],
        unitGrade: marksGuessing(false)[1]
    },
    {
        unitCode: "SIT 101",
        unitName: "Development and National Cohesion",
        unitMarks: marksGuessing(true)[0],
        unitGrade: marksGuessing(false)[1]
    },    
    {
        unitCode: "SCS 201",
        unitName: "Open Source Trends",
        unitMarks: marksGuessing(true)[0],
        unitGrade: marksGuessing(false)[1]
    },
    {
        unitCode: "AMM 201",
        unitName: "Calculus",
        unitMarks: marksGuessing(true)[0],
        unitGrade: marksGuessing(false)[1]
    },
    {
        unitCode: "AMM 101",
        unitName: "Probability and Statistics",
        unitMarks: marksGuessing(true)[0],
        unitGrade: marksGuessing(false)[1]
    }
    ],
    [
        {
            unitCode: "SCS 501",
            unitName: "Data Structures and Algorithms",
            unitMarks: marksGuessing(true)[0],
            unitGrade: marksGuessing(false)[1]
        },
        {
            unitCode: "SIT 101",
            unitName: "Entrepreneurship",
            unitMarks: marksGuessing(true)[0],
            unitGrade: marksGuessing(false)[1]
        }
    ]
];



export const getYearMarks = (year) =>{
    year = Number(year[5]) - 1;
    if(marks[year] === undefined){
        return [];
    }else{
        return marks[year];
    }
}

