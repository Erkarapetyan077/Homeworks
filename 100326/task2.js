let student = { name: "John", age: 18, grade: 90 };

Object.freeze(student);


student.name = "Erik";
student.age = 20;

console.log(student);