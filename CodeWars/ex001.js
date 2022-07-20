
function createPhoneNumber(numbers){
   
   var f1 = ""
   var f2 = ""
   var f3 = ""
   for (var n =0; n < 3; n++) {
     f1 = `${f1}${numbers[n]}`
   }
   for (var n =3; n < 6; n++) {
      f2 = `${f2}${numbers[n]}`
   }
   for (var n =6; n < 10; n++) {
      f3 = `${f3}${numbers[n]}`
    }
   return `(${f1}) ${f2}-${f3}`
  }

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))