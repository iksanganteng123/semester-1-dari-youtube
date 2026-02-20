class Hewan {
  warna
  keahlian
  constructor(nama) {
    this.nama = nama
  }
  set newColor(color) {
    this.warna = color
  }
  set newSkill(skill) {
    this.keahlian = skill
  }
  get detail() {
    return = `hii saya adalah ${this.nama}, saya berwarna ${this.warna} dan saya suka dan keahlian saya adalah ${this.keahlian}`
  }
}
const kucing = new Hewan('kujo jotaro')
kucing.newColor = "yelow"
kucing.newSkill = "nyolong makanan"
console.log(kucing.detail)