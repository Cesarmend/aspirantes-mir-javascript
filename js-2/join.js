// escribe la función maxIndex acá


function attach(array){

    let set= "";

    for( let i=0;i<array.length; i++){

        set = set + array[i] + " "
    }
    return set

}

console.log(attach([1, 3, 2])) // 1
console.log(attach([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(attach([])) // -1