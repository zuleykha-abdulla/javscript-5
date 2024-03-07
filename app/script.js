//ONMOUSEOVER;

function onMouse() {
  let x = document.getElementById("div1");
  x.style.borderColor = "black";
  x.style.borderRadius = "50px";
  x.style.backgroundColor = "blue";
  console.log("DIVIN UZERINDE");
}

function onOut() {
  let x = document.getElementById("div1");
  x.style.borderRadius = "0";
  x.style.borderColor = "yellow";
  x.style.backgroundColor = "green";
  console.log("DIVDEN CIXDIM");
}
