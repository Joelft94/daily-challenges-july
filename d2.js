array = [5, 3, 7, 8, 9, 1 ,4, 6, 2, 10]


function bubbleSort (array) {
    for (let i = 0; i < array.length; i++){

        for (let j = 0; j < array.length - 1; j++){

            if (array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}



function insertionSort(array){
    for (let i = 1; i < array.length; i++){
        let current = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

function selectionSort (array){
    for (let i = 0; i < array.length; i++){
        let min = i;

        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[min]){
                min = j;
            }
        }

        if (i !== min){
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;

}


console.log(bubbleSort(array));
console.log(insertionSort(array));
console.log(selectionSort(array));