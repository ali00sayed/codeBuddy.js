// level {2}




//1. Write a function to remove all even numbers from an Array.
// Input array: 
// [1, 3, 4, 6, 7, 8]
// Output should be array: [1, 3, 7]

// SOLUTION:

function removeEven(no){
    return number.filter(n=>n%2!==0);
}
const oddNo = removeEven([1, 3, 4, 6, 7, 8])
console.log(oddNo);
//OUTPUT : [ 1, 3, 7 ]





// Replace all the vowels in a string with uppercase vowels.
// Input string: 'Elie'
// Output should be string: 'ElIE'

// SOLUTION:
function countVow(str){
    var N = str.length;
    for(var i=0;i<N;i++){
        if(str[i]=='a' || str[i]=='e'|| str[i]=='i' || str[i]=='o' || str[i]=='u'){
            console.log(str[i].toUpperCase());
        }
        else{
            console.log(str[i]);
        }
    }
}

let str = 'Elie';
countVow(str);
//OUTPUT:8



// Write a function to find the maximum number in an array.
// Input array: [1, 3, 4, 6, 7, 8, 2, 5]
// Output should be a number: 8

// SOLUTION
const arr = [1, 3, 4, 6, 7, 8, 2, 5];
let largestNo =arr[0];
for(var i=0;i<arr.length;i++){
    if(largestNo < arr[i]){
        largestNo = arr[i]
    }
}
console.log(largestNo)
//OUTPUT : 8


