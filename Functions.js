function sum(numbers){
 count = 0 
 for( let i = 0; i < numbers.length; i++){
    count += numbers[i]
  }
 return count
}
console.log(sum([1,2,3,4]))

function avg(numbers){
    let count = 0
    for( let i = 0; i < numbers.length; i++){
       count += numbers[i]
    }
    let average = count / numbers.length
    return average
   }
   console.log(avg([1,2,3,4])) 

   function findLongestString(strings) {
    let longestStr = ""
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > longestStr.length) {
        longestStr = strings[i]
      }
    }
    return longestStr
  }
  
  const stringsArray = ["apple", "banana", "watermelon"]
  console.log(findLongestString(stringsArray))
  
  //Find longest of strings  than given integer
 function Compare(strs,index){
    let arrays = []
    for (let i = 0; i < strs.length; i++){
        if(strs[i].length > index){
            arrays.push(strs[i])
        }
    }
    return arrays
 }
 const stringsArray1 = ['say', 'hello', 'in', 'the', 'morning']
 console.log(Compare(stringsArray1,3))

 function recursion(n, current = 1) {
  if (current > n) {
      return "End of Numbers";
  } else {
      console.log(current)
      return recursion(n, current + 1)
  }
}
console.log(recursion(10)); // Show output for numbers 1-10


