    /*1. Write a function that returns the sum of two numbers.
    2. Write a function that returns the sum of all numbers regardless of # of params.
    */

    

    function additionAll(num, num2, ...arr){
        let add = num + num2
        for(let i = 0; i < arr.length; i++){
            add += arr[i]
        }
        
        console.log(add)
    }
    
    // let arr = [1, 2, 3, 4, 5]

    // const result = additionAll(1, 2)
    // const result = additionAll(3, 2)
    // const result = additionAll(...arr)
    const arr = [2, 3];
    const result = additionAll(5, 5, ...arr)

    console.log(result)
    
    //expect(result).toBe(3);
    //expect(result).toBe(5);
    //expect(result).toBe(15)
    //additionAll(1, 2,...arr)

    //const result = additionAll(...arr)


    