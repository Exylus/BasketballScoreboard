const teamOneElement = document.getElementById("teamOneScore");
const teamTwoElement = document.getElementById("teamTwoScore");
let teamOneScore = 0, teamTwoScore = 0;

function addOne(clicked_id) {
    if(clicked_id == "teamTwoButton") {
        teamTwoScore += 1;
        teamTwoElement.textContent = teamTwoScore;
    }
    else {
        teamOneScore += 1;
        teamOneElement.textContent = teamOneScore;
    }
}

function addTwo(clicked_id) {
    if(clicked_id == "teamTwoButton") {
        teamTwoScore += 2;
        teamTwoElement.textContent = teamTwoScore;
    }
    else {
        teamOneScore += 2;
        teamOneElement.textContent = teamOneScore;
    }
}

function addThree(clicked_id) {
    if(clicked_id == "teamTwoButton") {
        teamTwoScore += 3;
        teamTwoElement.textContent = teamTwoScore;
    }
    else {
        teamOneScore += 3;
        teamOneElement.textContent = teamOneScore;
    }
}