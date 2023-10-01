function checkSpeed() {
    // INPUT VALUE
    let a = parseInt(document.getElementById('speedInput1').value);

    if (a <= 1) {
        alert("Please try again");
        return;
    }

    // Calculate points and obtain
    let points = Math.floor((a - 70) / 5);
    let obtain = a;

    // Set innerHTML for elements
    document.getElementById("velocity").innerHTML = obtain;
    document.getElementById("Points").innerHTML = points;

    // Set innerHTML and color for Remarks based on points
    if (points > 12) {
        document.getElementById("Remarks").innerHTML = "<span style='color:Red'>License suspended!</span>";
    } else {
        document.getElementById("Remarks").innerHTML = "<span style='color:Green'>OK!</span>";
    }

    // Set innerHTML and color for speedCheck based on obtain
    if (obtain > 70) {
        document.getElementById("speedCheck").innerHTML = "<span style='color:Red'>Slow down!</span>";
    } else {
        document.getElementById("speedCheck").innerHTML = "<span style='color:Green'>OK!</span>";
    }
}