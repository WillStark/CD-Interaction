var cars = ["Alpha","Beta","Charli"]
console.log(cars.length);
for ( var i = 0; i < cars.length ; i++ ){
  console.log(cars[i]);
  console.log(i);

  document.getElementById("jOutput").innerHTML =
  document.getElementById("jOutput").innerHTML + " " + cars[i];
}
  for ( var n = 0; n < 20; n = n + 1){
    if ((n+1)%2 == 0){
      console.log(n + " is odd.");
    } else {
      console.log(n)
    }
  }
