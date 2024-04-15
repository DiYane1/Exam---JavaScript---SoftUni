function examStatistics(input) {
    let studentsCount = Number(input.shift());

    let topStudentsCount = 0;
    let between4and499Count = 0;
    let between3and399Count = 0;
    let failCount = 0;
    let totalScore = 0;

    for (let i = 0; i < studentsCount; i++) {
        let grade = Number(input.shift());
        totalScore += grade;

        if (grade >= 5.00) {
            topStudentsCount++;
        } else if (grade >= 4.00) {
            between4and499Count++;
        } else if (grade >= 3.00) {
            between3and399Count++;
        } else {
            failCount++;
        }
    }

    let topStudentsPercent = (topStudentsCount / studentsCount) * 100;
    let between4and499Percent = (between4and499Count / studentsCount) * 100;
    let between3and399Percent = (between3and399Count / studentsCount) * 100;
    let failPercent = (failCount / studentsCount) * 100;
    let averageScore = totalScore / studentsCount;

    console.log(`Top students: ${topStudentsPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${between4and499Percent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${between3and399Percent.toFixed(2)}%`);
    console.log(`Fail: ${failPercent.toFixed(2)}%`);
    console.log(`Average: ${averageScore.toFixed(2)}`);
}

