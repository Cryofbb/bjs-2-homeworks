function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark){
  if (this.marks === undefined){ 
    this.marks = [];
    this.marks.push(mark);
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark){
  if (this.marks === undefined) this.marks = [];
  for (element of mark) this.marks.push(element);
}

Student.prototype.getAverage = function (){
  let sum = 0;
  for (element of this.marks) sum += element;
  return (sum / this.marks.length);
}

Student.prototype.exclude = function (reason){
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}