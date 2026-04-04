function printResult() {
  console.log(this.name + " scored " + this.score);
}

const student1 = { name: "Anna", score: 80 };
const student2 = { name: "Mark", score: 95 };

printResult.call(student1);
printResult.apply(student2);
