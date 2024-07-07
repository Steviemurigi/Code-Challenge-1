function gradeAllocator(marks) {
    const marks = prompt('Enter student\'s marks');
    if (isNaN(marks) || marks < 0 || marks > 100) { 
        console.log("Invalid input. Please enter a valid number ranging from 0 to 100.");
        return;
    }
    let grade;
    if (marks > 79){
        grade = 'A';
    } else if (marks>=60){
        grade = 'B';
    } else if (marks>=49){
        grade = 'C';
    } else if (marks>=40){
        grade = 'D';
    } else {
        grade = 'E'
    }
}
