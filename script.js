var p = document.querySelectorAll("p");
var i;
for (i = 0; i < p.length; i++) {
  p[i].classList.add("je_moeder");
}

function je_oma() {
  // var body = document.querySelector("body");
  // body.classList.add("je_oom");
  console.log("boeler");
  // var color = document.getElementById("je_zus").value;
  document.getElementById("body").style.backgroundColor = document.getElementById("je_zus").value;
}
function je_opa() {
  // var body = document.querySelector("body");
  // body.classList.add("je_oom");
  console.log("boeler");
  // var color = document.getElementById("je_zus").value;
  document.getElementById("body").style.color = document.getElementById("je_zus").value;
}
