const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch (array, target){
    let left = 0;
    let right = array.length - 1;

    while (left <= right){
        let mid = Math.floor((left + right) / 2);
        
        if (array[mid] === target){
            return mid;
        } 

        if (array[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        }
    
    return -1;

    }

// Para usar con node.js en la terminal https://www.codecademy.com/article/getting-user-input-in-node-js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number between 1 and 10: ', number => {
    const target = parseInt(number, 10);
    const result = binarySearch(numbers, target);
    console.log(result >= 0 ? `El numero fue encontrado en el indice ${result}` : "Numero no encontrado");
    readline.close();
});
