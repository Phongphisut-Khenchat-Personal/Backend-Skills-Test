// โจทย์:คำนวณผลรวมของตัวเลขในแต่ละหลักโดยใช้ loop
// ให้ฟังก์ชัน sumDigits(n) คำนวณผลรวมของตัวเลขในแต่ละหลักของ n โดยใช้ while loop

function sumDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(sumDigits(1234)); // 10 (1+2+3+4)
console.log(sumDigits(9876)); // 30 (9+8+7+6)
console.log(sumDigits(102));  // 3 (1+0+2)
