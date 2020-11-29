function tinhTong() {
    let a = 100;
    let b = 200;
    let c = a + b;
    console.log("Tổng của " + a + " và " + b + " là : " + c);
}

function mang() {
    let arrBT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Mảng ban đầu : ");
    console.log(arrBT);
    console.log("Số phần tử trong mảng : " + arrBT.length);
    console.log("Phần tử có index = 7 : " + arrBT[6]);
    arrBT.splice(5, 1);
    console.log("Mảng sau khi xóa phần tử thứ 5 : ");
    console.log(arrBT);
}

mang2 = () => {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Mảng ban đầu : ");
    console.log(arr1);
    let arr2 = arr1.map(x => x * 3);
    console.log("Mảng lúc sau : ");
    console.log(arr2);
};

