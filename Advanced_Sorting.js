



var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



//SORT IN ALPHABETICAL ORDER
// IF SAME NAME PRIORITIZE OLDER STUDENT FIRST
students.sort(function(firstVal,secondVal) {
 var name1 = firstVal.name;
 var name2 = secondVal.name;
 var age1 = firstVal.age;
 var age2 = secondVal.age;

 //Checking for first priorities of name if equal
    if(name1 === name2) {
     // -1 HIGHER PRIOTITY
       if (age1 > age2){
          return -1;
  // 1 LOWER PRIORITY
    } else {
      return 1;
    }

    } else if (name1 < name2){
     return -1;
     } else if (name1 > name2){
       return 1;
     }
// 0 DONT MY PRIORITY
 return 0;
 });

console.log(students);







