// Atividade I - Average of score
function getAverage(scores) {
    let sum = 0;
    let average = 0;
    let leng = scores.length;  
  
    for (const score of scores) {    
      sum = sum + score;  
    }
  
    average = sum / leng;
    
    return average;
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// atividade II - grade of score 
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// Atividade III - as passing grade

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

// Atividade IV - test final

function studentMsg(totalScores, studentScore) {
  
    // pegar a media da classe
    const media = getAverage(totalScores);
    console.log(media);
  
    // pegar nota do aluno
    const notaAluno = getGrade(studentScore)
      console.log(notaAluno);

    let result;

    // checar se o aluno passou e mostrar o resultado
    if(hasPassingGrade(studentScore)) {
     result = "Class average: " + media + "." + " Your grade: " + notaAluno + ". You passed the course.";
    } else {
     result = "Class average: " + media + "." + " Your grade: " + notaAluno + ". You failed the course.";
     
    }
   return result; 
  }
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
