console.log("javascript working");

document.getElementById("email").addEventListener("click", submitClicked);


function submitClicked(){
    alert("Feel free to contact me!");
    document.getElementById("email").innerHTML = "Phone: (408)355-0151";
}
