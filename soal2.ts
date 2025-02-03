function gradingStudents(grades: number[]): number[] {
    const roundedGrades: number[] = [];
  
    for (const grade of grades) {
      if (grade < 38) {
        roundedGrades.push(grade);
      } else {
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        if (nextMultipleOf5 - grade < 3) {
          roundedGrades.push(nextMultipleOf5);
        } else {
          roundedGrades.push(grade);
        }
      }
    }
    return roundedGrades;
  }
  
  // Example Usage (based on the Sample Input provided)
  const numStudents = 4;
  const studentGrades = [73, 67, 38, 33];
  const result = gradingStudents(studentGrades);
  console.log(result); // Output: [ 75, 67, 40, 33 ]