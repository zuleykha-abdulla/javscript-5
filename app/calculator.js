function hesabla() {
  let eded1, eded2, netice, span, select;
  eded1 = document.getElementById("eded1").value * 1;
  eded2 = document.getElementById("eded2").value * 1;
  select = document.getElementById("select").value;
  if (select === "+") {
    netice = eded1 + eded2;
  } else if (select === "-") {
    netice = eded1 - eded2;
  } else if (select === "*") {
    netice = eded1 * eded2;
  } else if (select === "/") {
    netice = eded1 / eded2;
  }
  span = document.getElementById("netice");
  span.innerHTML = netice;
}
function clean() {
  let eded1, eded2, netice, span, select;
  eded1 = document.getElementById("eded1");
  eded1.value = 0;
  eded2 = document.getElementById("eded2");
  eded2.value = 0;
  select = document.getElementById("select");
  select.value = 0;
  span = document.getElementById("netice");
  span.innerHTML = 0;
}
