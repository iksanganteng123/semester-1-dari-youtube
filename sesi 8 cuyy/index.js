let passwordlength = document.getElementById("passwordlength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatepassword = (len) => {
  const LowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const UpperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const Numeric = "0123456789";
  const simbol = "!@#$%^&*()_-+={}[]'";

  const data = LowerAlphabet + UpperAlphabet + Numeric + simbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};
const getpassword = () => {
  const newPassword = generatepassword(passwordlength.value);
  password.value = newPassword;
  setTimeout(() => {
    alert("password has been generated!");
  }, 1000);
};
const savepassword = () => { 
  document.title = password.value;
  saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password
   saya: ${document.title}`))
  saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
  setTimeout(() => {
    alert("berhasil disimpan");
  }, 1000);
};
