const nama = "ikhsan Asalani";
let usia = 20;
let angkatan;
const biodata = document.getElementById("biodata");
console.log(biodata);
function dataseseorang() {
  let angkatan usia;
  if (usia > 1 && usia < 10) {
    angkatan = "anda seseorang anak-anak";
  } else if (usia > 10 && usia < 20) {
    angkatan = "anda seseorang remaja remaji";
  } else if (usia > 20 && usia < 30) {
    angkatan = "anda seseorang pria DEWASA";
  } else {
    angkatan = "anndaaa apaan dahhhh";
  }
  return (biodata.innerHTML = angkatan);
}
console.log(nama);
dataseseorang();
