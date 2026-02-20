function saklar(kukang, ngen) {
  console.log(kukang, ngen);
  console.log("testing saklarrrrnya");
  let lamp1 = document.getElementById("lamp1");
  let lamp2 = document.getElementById("lamp22");
  let lamp3 = document.getElementById("lamp3");
  let lamp4 = document.getElementById("lamp4");
  // SAKLAR ON
  if (kukang == "on") {
    if (ngen == "1") {
      lamp1.src = "lampu on.jpg";
    }
    if (ngen == "2") {
      lamp22.src = "lampu on.jpg";
    }
    if (ngen == "3") {
      lamp3.src = "lampu on.jpg";
    }
    if (ngen == "4"){
      lamp4.src ="lampu on.jpg"
    }
  }
  // SAKLAR OF
  if (kukang == "of") {
    if (ngen == "1") {
      lamp1.src = "lampu of.jpg";
    }
    if (ngen == "2") {
      lamp2.src = "lampu of.jpg";
    }
    if (ngen == "3") {
      lamp3.src = "lampu of.jpg";
    }
    if (ngen == "4"){
    lamp4.src = "lampu of.jpg"
  }
  } 
}
function saklar2() {
  let togelbiasa = document.getElementById("togel1");
  let gambar = document.getElementById("initogel1");
  console.log("ini adalah sebuah togel");
  if (togelbiasa.checked) {
    gambar.src = "lampu on.jpg";
  } else {
    gambar.src = "lampu of.jpg";
  }
  let togel2 = document.getElementById("togel22");
  let kakang = document.getElementById("iniadalahtogel");
  if (togel2.checked) {
    kakang.src = "lampu on.jpg";
  } else {
    kakang.src = "lampu of.jpg";
  }
  let tote = document.getElementById("togel33");
  let togeltelu = document.getElementById("togel3");
  if(tote.checked){
    togeltelu.src = "lampu on.jpg";
  } else {
    togeltelu.src = "lampu of.jpg"
  }
}
function togelaneh( ping, pong){
  console.log("haiii anjirrrrr");
  let saya = document.getElementById("togelbeda")
  // LAMPU ON 
  if(ping == "mem"){
    if (pong == "9") {
      togelbeda.src = "lampu on.jpg"
    }
  }
  if(ping == "mew"){
    if (pong == "9"){
      togelbeda.src = "lampu of.jpg"
    }
  }
  // LAMPUU MURUBBB
}
