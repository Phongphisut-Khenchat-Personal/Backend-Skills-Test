function digitalRoot(n) {
    while (n >= 10) { // ทำซ้ำจนกว่า n จะเหลือเพียงหลักเดียว
        let sum = 0;
        while (n > 0) {
            sum += n % 10; // เพิ่มค่าของตัวเลขหลักสุดท้ายเข้า sum
            n = Math.floor(n / 10); // ตัดตัวเลขหลักสุดท้ายออก
        }
        n = sum; // อัปเดต n ให้เป็นผลรวมที่คำนวณได้
    }
    return n; // คืนค่าหลักสุดท้ายที่เหลือ
}

// ตัวอย่างการใช้งาน
console.log(digitalRoot(987)); // 6 (9+8+7 = 24, 2+4 = 6)
console.log(digitalRoot(1234)); // 1 (1+2+3+4 = 10, 1+0 = 1)




// function digitalRoot(n) {
//     return n === 0 ? 0 : 1 + (n - 1) % 9;
// }

// // ตัวอย่างการใช้งาน
// console.log(digitalRoot(987)); // 6
// console.log(digitalRoot(1234)); // 1
