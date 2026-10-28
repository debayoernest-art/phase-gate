


function reverseMatrix(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].reverse();
    }

    return array;
}

let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

reverseMatrix(numbers);

console.log(numbers);
