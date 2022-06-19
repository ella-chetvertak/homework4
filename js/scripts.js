    // First

let myArray = ['455', 87.15, true, undefined, 7, null, false, [], {}];
for (let key in myArray) {
    console.log(typeof(myArray[key]));
}
for (let key in myArray) {
    if (!isNaN(myArray[key])) {
        console.log(`${myArray[key]} + 3 = ${parseFloat(myArray[key])+3}`);
    } else console.log(`${myArray[key]} is not a number!`);
}

    // Second

let Arr = []
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
let length = Math.floor(prompt('Enter the length of the array', ''));
for (let i = 0; i < length; i++) {
    Arr.push(getRandomArbitrary(0, 10));
}
console.log(Arr);
let CallbackRuns = 0;
let newArr = Object.assign(Arr);
for (let i = 2; i < newArr.length; i+=3) newArr[i]*=3;
console.log(newArr);

    // Third

let student1 = {
    firstName: 'Todd',
    lastName: 'Turner',
    mark: 5,
};
let student2 = {...student1};
student2 = {
    mark: 3,
};
let student3 = Object.assign(student1);
student3 = {
    mark: 1,
};
marks = [student1.mark, student2.mark, student3.mark];
let sum = 0;
for (let key in marks) {
    sum += marks[key];
}
let averageMarks = sum / (marks.length);
console.log(`Average mark of students is ${averageMarks}`);
for (key in student1) {
    console.log(key, student1[key])
}