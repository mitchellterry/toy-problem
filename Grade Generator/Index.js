function calculate() {
    const subjectMarks = [];
    const subjectNames = ['bookOne', 'bookTwo', 'bookThree', 'bookFour', 'bookFive', 'bookSix', 'bookSeven'];

    // Get subject marks and check for invalid input
    let isValid = true;
    for (let i = 0; i < subjectNames.length; i++) {
        const subjectInput = document.getElementById(subjectNames[i]);
        const subjectMark = parseInt(subjectInput.value);

        if (subjectMark > 100) {
            alert("INVALID INPUT!");//SUBJECT MARKS LIMIT
            isValid = false;
            break;
        }

        subjectMarks.push(subjectMark);
    }

    if (!isValid) {
        return;
    }

    const totalMarks = subjectMarks.reduce((sum, mark) => sum + mark, 0);
    const percentage = ((totalMarks / 700) * 100).toFixed(2); // Convert to two decimal places

    document.getElementById("scoreTotal").innerHTML = totalMarks;
    document.getElementById("per").innerHTML = percentage + "%"; // Display with percentage symbol

    if (percentage > 49) {//PASSMARK
        document.getElementById("remarks").innerHTML = "<span style='color:Green'>PASS!</span>";
    } else {
        document.getElementById("remarks").innerHTML = "<span style='color:Red'>FAIL!</span>";
    }

    //GRADE EVALUATOR THAT ASSIGNS THE GRADE AS PER THE GRADE SHEET, DEPENDING ON THE STUDENT'S PERCENTAGE
    if (percentage >= 79) {
        document.getElementById("grade").textContent = "A";
    } else if (percentage >= 60) {
        document.getElementById("grade").textContent = "B";
    } else if (percentage >= 49) {
        document.getElementById("grade").textContent = "C";
    } else if (percentage >= 40) {
        document.getElementById("grade").textContent = "D";
    } else {
        document.getElementById("grade").textContent = "E";
    }
}