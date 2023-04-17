    /*1. Write a function that returns the sum of two numbers.
    2. Write a function that returns the sum of all numbers regardless of # of params.
    */

    */

    function additionAll(num, num2, ...arr){
        let add = num + num2
        for(let i = 0; i < arr.length; i++){
            add += arr[i]
        }
        
        console.log(add)
    }
    
    let arr = [10,10,10,10,10]
    
    additionAll(1, 2,...arr)
    