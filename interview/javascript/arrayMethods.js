const students = [
  { id: 1, name: "Aisha", scores: [80, 90, 70], passed: true },
  { id: 2, name: "John", scores: [60, 50, 40], passed: false },
  { id: 3, name: "Mary", scores: [95, 85, 100], passed: true },
  { id: 4, name: "David", scores: [30, 45, 50], passed: false },
];

// Tasks:
// Get only students who passed
console.log("Question 1");
const passedStudents = students.filter((student) => student.passed === true);
console.log(passedStudents);

console.log(`\n`);

// Extract only their names
console.log("Question 2");
const studentName = students.map((student) => student.name);
console.log(studentName);

console.log(`\n`);

// Return average
console.log("Question 4");
const studentAves = students.map((student) => {
  const studentAve =
    student.scores.reduce((sum, score) => sum + score, 0) /
    student.scores.length;

  return studentAve;
});
console.log(studentAves);

console.log(`\n`);

// Return a new array of objects { name, average }
console.log("Question 5");

const newStudents = students.map((student) => {
  const StudentAve =
    student.scores.reduce((sum, score) => sum + score, 0) /
    student.scores.length;

  return ({
    name: student.name,
    StudentAve
  });
});
console.log(newStudents);

console.log(`\n`);

// Sort the result by highest average score
console.log("Question 6");
// Add average to each obj
const newStudentss = students.map((student) => {
                        const studentAve =
                          student.scores.reduce((sum, score) => sum + score, 0) /
                          student.scores.length;
                        return ({ ...student, studentAve });
                      });
// sort with the average
const sortedStudents = newStudentss.sort((a, b) => b.studentAve - a.studentAve);
console.log("Sorted students with sorting", sortedStudents);

console.log(`\n`);

// Check if every passing student scored above 60
console.log("Question 7");
const passedStudent = students.filter((student) => student.passed === true)
                              .every(student => student.scores.every(score => score > 60));
console.log(passedStudent);
// Check if at least one student failed all subjects
// Find the first student whose average is above 90
// Return a single array of all scores
// Calculate the total sum of all scores

// filter, map, reduce, flat, sort, every, some, find
// const students = [
//   { id: 1, name: "Aisha", scores: [80, 90, 70], passed: true },
//   { id: 2, name: "John", scores: [60, 50, 40], passed: false },
//   { id: 3, name: "Mary", scores: [95, 85, 100], passed: true },
//   { id: 4, name: "David", scores: [30, 45, 50], passed: false },
// ];
