names = ["Geetu sharma", "Pinky", "Rekha", "Sunita", "Poonam", "Rachna", "nitika", "kajal"]
function a() {
var j = Math.floor(Math.random()* names.length);
document.getElementById("1st person").innerHTML = names[j];
j = Math.floor(Math.random()* names.length);
document.getElementById("2nd person").innerHTML = names[j]; 
}
a();
