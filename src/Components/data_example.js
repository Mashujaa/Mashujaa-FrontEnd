const studentsMarks = [
    {
        studentName: "Grace Njeri",
        studentCat1: 10,
        studentCat2: 10,
        studentCat3: 10,
        studentAssignemt: 10,
        studentExamination: 70,
    },
    {
        studentName: "Naomi Sherry",
        studentCat1: -1,
        studentCat2: -1,
        studentCat3: -1,
        studentAssignemt: -1,
        studentExamination: -1,
    },
    {
        studentName: "Mercy Masika",
        studentCat1: -1,
        studentCat2: -1,
        studentCat3: -1,
        studentAssigment: -1,
        studentExamination: -1,
    }
]

/*
So where the values are -1 this symbolizes that the marks for that section have not been uploaded yet since
someone cannot have -1 marks.
So the Backend will give us this data, to we now add this informatipn in the table:
        <tr>
            <th>studentMarks[0].studentName</th>
            <th>studentMarks[0].studentCat1</th>
            <th>studentMarks[0].studentCat2</th>
            <th>studentMarks[0].studentCat3</th>
            <th>studentMarks[0].studentAssignment</th>
            <th>studentMarks[0].studentExamination</th>
          </tr>

    now this will be for first person Grace.

For the second person Naomi we just increment the array counter by one:
        <tr>
            <th>studentMarks[1].studentName</th>
            <th>studentMarks[1].studentCat1</th>
            <th>studentMarks[1].studentCat2</th>
            <th>studentMarks[1].studentCat3</th>
            <th>studentMarks[1].studentAssignment</th>
            <th>studentMarks[1].studentExamination</th>
          </tr>

So this data will be added dynamically in the table depending on the data received
*/ 