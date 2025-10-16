let studentsScore = [
{ 
    name: 'Andi',
    score: 90
},
{ 
    name: 'Rudi', 
    score: 80 
},
{ 
    name: 'Dira', 
    score: 100 
 },
]


let highest = studentsScore[0];

for (let student of studentsScore) {
  if (student.score > highest.score) {
    highest = student;
  }
}


console.log(`Siswa dengan nilai tertinggi adalah ${highest.name} dengan nilai ${highest.score}`);