const http = require('http')
const rupiah = require('rupiah-format')
const fs = require('fs')
const os = require('os');

const host = '127.0.0.1'
const port = 3002

 //request adalah data masuk dari luar 
 // respons adalah = data keluar dari sistem 

 const server = http.createServer(function (request,response) {
  const nama = "IKHSAN ASLANI";
  let uang = 500000;
  let jajan = 150000;
  let sisa = uang-jajan;

  uang = rupiah.convert(uang);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);

  fs.appendFile('sisauang.txt', sisa,() => {
    console.log('data uang berhasil disimpan')
  });
  
  const sisaRam = os.freemem();
  const jumlahCPU = os.cpus();

  function checkCPU() {
    let myCPU = [];
    jumlahCPU.map((cpu, i) => {
      myCPU.push(cpu.model)
    })
    return myCPU
  }
  console.log(checkCPU())

  const hasil = `
  <head>
  <title>${nama}</title>
  </head>
  <body>
  <h1 style='background:black;color: white;padding: 20px; text-align: center'>NODE JS UANG JAJAN</h1>
  <p> 
  nama saya ${nama} saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} 
  sekarang menjadi ${sisa}
  </p>
  <h5> Sisa Ram saya ${sisaRam}</h5>
  <h5> Jumlah Cpu di laptop saya ${checkCPU()}</h5>
  </body>
  `

response.statusCode = 203;
response.end(hasil);
 });

 server.listen(port, host, '', function () {
  console.log(`server menyala abngkuh ${host}:${port}`)
 })
