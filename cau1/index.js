let array1 = ["Nghia", "Dat", "CodeGym"];

function cau1(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max.length < arr[i].length) {
            max = arr[i];
        }
    }
    document.write(max);
}
cau1(array1);

