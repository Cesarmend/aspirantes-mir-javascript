// escribe la función max acá

function maxIndex(array){

    if(array.length===0){
        return -1
    }

    let y= 0;
    
    for(let i=1; i < array.length; i++){

        if (array[i]> array[y]){

        y = i
        }
    return y
    }
}


console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1