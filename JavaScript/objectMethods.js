
// Main object for all questions
const student = {
  name: 'Arun',
  batch: 'July B3',
  score: 85,
  city: 'Kochi',
  course: 'MERN Stack',
  phone: '9876543210'
};

/*
  QUESTIONS
*/

// 1 Get all property names from the student object.
console.log('Property names:',Object.keys(student));

// 2 Get all property values from the student object.
console.log('Property values:',Object.values(student))

// 3 Print each key-value pair in the format: key → value
for (const key in student) {
    console.log(`${key} -> ${student[key]}`);
}

// 4 Create a new object by adding a new property: email = "arun@example.com"
const updatedStudent= {...student,email:"arun@example.com"}
console.log('Updated Student with email',updatedStudent);

// 5 Create a new object by updating the score to 90
const scoreUpdate = {...student,score:90}
console.log(' Student with updated score',scoreUpdate);

// 6 Clone the student object into a new variable
const cloneStudent={ ...student}
console.log('Student clone',cloneStudent);

// 7 Check if the student object contains the property city
console.log('student object contains the property city:',Object.hasOwn(student,'city'));

// 8 Make the student object immutable and try changing the city to 'Ernakulam'
Object.freeze(student)
student.city='Ernakulam'
console.log('Make the student object immutable and try changing the city to Ernakulam',student);

// 9 Restrict the student object so that properties cannot be added or removed, but can be updated; then try adding age = 21
Object.seal(cloneStudent)
cloneStudent.city='Ernakulam'
cloneStudent.age=21
console.log('Restrict the student object so that properties cannot be added or removed',cloneStudent); //can update but cant add property

// 10 Convert the student object into an array of key-value pairs
const studentArray=Object.entries(student)
console.log('student object into an array of key-value pairs',studentArray);

// 11 Convert an array of key-value pairs back into an object
const arrayToObject=Object.fromEntries(studentArray)
console.log('Convert an array of key-value pairs back into an object',arrayToObject);
