function saklar() {
  // TOGGLE SATU
  let toggle1 = document.getElementById("AcceptConditions1");
  let toggle2 = document.getElementById("AcceptConditions2");
  let toggle3 = document.getElementById("AcceptConditions3");

  let bohlam1 = document.getElementById("bohlam1");
  let bohlam2 = document.getElementById("bohlam2");
  let bohlam3 = document.getElementById("bohlam3");

  // toggle.checked ? alert("modarr") : alert("modarr");
  // LAMPUU MURUBBB
  if (toggle1.checked) {
    bohlam1.src = "lampu on.jpg";
  } else {
    bohlam1.src = "lampu of.jpg";
  }
  if (toggle2.checked) {
    bohlam2.src = "lampu on.jpg";
  } else {
    bohlam2.src = "lampu of.jpg";
  }
  if (toggle3.checked) {
    bohlam3.src = "lampu on.jpg";
  } else {
    bohlam3.src = "lampu of.jpg";
  }
}
