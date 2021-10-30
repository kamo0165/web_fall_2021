console.log("javascript working");
let days = ["label"];



// for(i=0; i<document.getElementsByClassName("tabs").length; i++){
//   document.getElementsByClassName("tabs")[i].innerHTML = "<h2>" + days[i] + "</h2>";
//
//   document.getElementsByClassName("tabs")[i].addEventListener('click', setActive, false);
//
//   document.getElementsByClassName("tabs")[i].id = days[i];

  // document.getElementById("one").addEventListener('click', setActiveButton, false);
  // document.getElementById("two").addEventListener('click', setActiveButton, false);

document.getElementById("day1Week").addEventListener("click", day1Clicked);
document.getElementById("day2Week").addEventListener("click", day2Clicked);
document.getElementById("day3Week").addEventListener("click", day3Clicked);
document.getElementById("day4Week").addEventListener("click", day4Clicked);
document.getElementById("day5Week").addEventListener("click", day5Clicked);
document.getElementById("day6Week").addEventListener("click", day6Clicked);
document.getElementById("day7Week").addEventListener("click", day7Clicked);
document.getElementById("submit").addEventListener("click", submitClicked);


// const done = ["done!"];

function day1Clicked(){
    document.getElementById("day1Week").innerHTML = "done!";
}

function day2Clicked(){
    document.getElementById("day2Week").innerHTML = "done!";
}

function day3Clicked(){
    document.getElementById("day3Week").innerHTML = "done!";
}

function day4Clicked(){
    document.getElementById("day4Week").innerHTML = "done!";
}

function day5Clicked(){
    document.getElementById("day5Week").innerHTML = "done!";
}

function day6Clicked(){
    document.getElementById("day6Week").innerHTML = "done!";
}

function day7Clicked(){
    document.getElementById("day7Week").innerHTML = "done!";
}

function submitClicked(){
    alert("Congratulations on taking care of yourself this week!");
    document.getElementById("submit").innerHTML = "See you next week!";
}
