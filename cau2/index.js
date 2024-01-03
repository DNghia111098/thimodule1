let array1 = 0;

function tryLastlndexOf(arr,value) {
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            array1 = i;
        }
    }
    if(array1) {
        console.log("vị trí cuối cùng của giá trị value trong mảng là :" +array1)
    } else{
        console.log(-1);
    }
}
tryLastlndexOf([5,8,9,10,4],12)