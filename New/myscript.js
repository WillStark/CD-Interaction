
for ( var n = 0; n < 20 ;n = n+1){
 if ((n+1)%2 == 0)
  document.getElementById("evenodd").innerHTML =
  document.getElementById("evenodd").innerHTML + (n+1) "is even.</br> "
} else {
    document.getElementById("evenodd").innerHTML =
    document.getElementById("evenodd").innerHTML+ (n+1) "is even.</br> "
};

var numset1 = [2,6,9,8];
var numset2 = [11,1246,9000,456];
var numset3 = [];
console.log(numset1[0]+numset2[0]);
 for ( y=0; y < numset1.length; y++){
   console.log(numset1[y] + numset2[y]);
   numset3[y] = numset1[y] + numset2[y];
 }

 console.log(numset3);

let str1 ="javascript";
var str2 = ""
console.log(str1);
console.log(str1.length);
for (p = 0; p < str1.length; p++){
  if (p%2 == 0){
    console.log("even");
    strl2 += "Z";
  }else{
    str2 += str1[p]
  }
  console.log(str1);
}
