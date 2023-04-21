// ITCS227 Source Code Template for 2T AY 2022-2023
/*
  Progam:     Computation of Grades using Function
  Programmer:   Hans Aaron G. Laureles
  Section :   BCS22
  Start Date:   April 17, 2023
  End Date:   April 25, 2023

*/
const students = [];
const grades = [];

for (let i = 0; i < 2; i++) {
  let studentName = prompt("Enter the name of the student:");
  students.push(studentName);

  let enablingAssessments = [];
  for (let j = 0; j < 5; j++) {
    let enablingAssessment = Number(prompt(`Enter enabling assessment ${j + 1} for ${studentName}:`));
    enablingAssessments.push(enablingAssessment);
  }

  let classParticipation = enablingAssessments.reduce((a, b) => a + b, 0) / enablingAssessments.length;

  let sumAssessments = [];
  for (let j = 0; j < 3; j++) {
    let sumAssessment = Number(prompt(`Enter summative assessment ${j + 1} for ${studentName}:`));
    sumAssessments.push(sumAssessment);
  }

  let summativeGrade = sumAssessments.reduce((a, b) => a + b, 0) / sumAssessments.length;

  let finalExam = Number(prompt(`Enter major exam grade for ${studentName}:`));

  let finalGrade = (classParticipation * 0.3) + (summativeGrade * 0.3) + (finalExam * 0.4);

  let letterGrade;
  if (finalGrade >= 90) {
    letterGrade = "A";
  } else if (finalGrade >= 80) {
    letterGrade = "B";
  } else if (finalGrade >= 70) {
    letterGrade = "C";
  } else if (finalGrade >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  let studentGrade = {
  "Student Name": studentName,
  "Class Participation": classParticipation.toFixed(0),
  "Summative Assessment": summativeGrade.toFixed(0),
  "Exam Grade": finalExam.toFixed(0),
  "Grade Score": finalGrade.toFixed(0),
  "Letter Grade": letterGrade,
};

  grades.push(studentGrade);
}

grades.forEach((grade) => {
  delete grade.index;
});

console.table(grades);