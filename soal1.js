var n = '1234567';
var pisah = n.split("");
var akhir = pisah.length;
for (let i=1; i<=akhir-1; i++){
  console.log(i);
  for (let j=0; j<akhir-i-1; j++){
    console.log(0);
  }
}