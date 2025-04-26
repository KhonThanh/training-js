// bài số 1
const lessionOne = `Bài số 1`;
console.log(lessionOne);
const name = "Thành";
let age = "30 ";
const laSinhVien = false;
let status = laSinhVien ? "là" : "không là";
console.log(`Tôi tên là ${name}, năm nay tôi ${age} tuổi, tôi ${status} sinh viên`);

// bài số 2
const lessionTwo = `Bài số 2`;
console.log(lessionTwo);

const requestOne = `Yêu cầu 1`;
console.log(requestOne);
let tuoi = 19;
if (tuoi >= 18) {
    console.log(`bạn đủ tuổi đi bầu`)
} else {
    console.log(`Xin lỗi bạn chưa đủ tuổi`)
}

const requestTwo = `Yêu cầu 2`;
console.log(requestTwo);
let point = 5;
if (point == 10) {
    console.log(`Học sinh xuất sắc`);
} else if (point >= 8) {
    console.log(`Học sinh giỏi`);
} else if (point >= 6) {
    console.log(`Học sinh khá`);
}
else if (point <= 5) {
    console.log(`Học sinh yếu`);
}

const requestThree = `Yêu cầu 3`;
console.log(requestThree);
let day = 7;
switch (day) {
    case 1:
        console.log(`Thứ 2`);
        break;
    case 2:
        console.log(`Thứ 3`);
        break;
    case 3:
        console.log(`Thứ 4`);
        break;
    case 4:
        console.log(`Thứ 5`);
        break;
    case 5:
        console.log(`Thứ 6`);
        break;
    case 6:
        console.log(`Thứ 7`);
        break;
    case 7:
        console.log(`Thứ Chủ Nhật`);
        break;
    default:
        console.log(` Không rõ `)
}

const requestFour = ` Yêu cầu 4 `;
console.log(requestFour);
let number = 10;
if (number % 2 == 0) {
    console.log(` là số chẳn `);
} else {
    console.log(` là số lẻ `);
}

const lessionThree = ` Bài 3 `;
console.log(lessionThree);

const requestOneLessionOne = ` Yêu cầu 1`;
console.log(requestOneLessionOne);

let p = 1;
while (p <= 3) {
    console.log("Số thứ:", p);
    p++;
}


const requestTwo__LessionOne = ` Yêu cầu 2 `;
console.log(requestTwo__LessionOne);

let i = 1
while (i <= 4) {
    if (i % 2 === 0) {
        console.log(` Số chẳn thứ `, i);
    }
    i++;
}

const requestThreeLessionTwo = ` Yêu cầu 3`;
console.log(requestThreeLessionTwo);

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(` Tổng số từ 1 đến ${n} là ${sum}`)

const requestFourLessionTwo = ` Yêu cầu 4 `;
console.log(requestFourLessionTwo);

for (let i = 1; i <= 1; i++) {
    console.log(` Bảng cửu chương ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${j} x ${i} = ${i * j}`);
    }
}

const requestFiveLessionTwo = ` Yêu cầu 5 `;
console.log(requestFiveLessionTwo);

let sumDivisibleForThree = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        sumDivisibleForThree++;
    }
}
console.log(` Số lượng số chia hết cho ba là ${sumDivisibleForThree}`);
