console.log('hello!');

let pics = 8;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('portfolio').innerHTML += "<div class = 'pimage'><img src='assets/portfolio/" + pic + ".jpg'" + "class='portfoliopic' id='pic" + pic+ "' /></div>";
}

let displaydetails = false;
document.getElementById('portfolio').addEventListener("click", showDetails);

function showDetails(){
  document.getElementById('details').style.display="block";
  document.getElementById('detailsoverlay').style.display = "block";
  document.getElementById('detailsoverlay').addEventListener('click', clickOverlay);
  displaydetails = true;
}

function clickOverlay(){
  document.getElementById('details').style.display="none";
  document.getElementById('detailsoverlay').style.display = "none";
  displaydetails = false;

}
