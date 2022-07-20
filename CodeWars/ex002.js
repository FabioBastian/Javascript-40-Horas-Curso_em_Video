/*
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
function filter_list(numbers){

    for (var c = 0; c < numbers.length; c++) {
        var n = numbers[c]
        var varifica = []
        verifica = n[c]
        console.log(verifica[c])
    }
}
console.log(filter_list([1,2,'a','b']))