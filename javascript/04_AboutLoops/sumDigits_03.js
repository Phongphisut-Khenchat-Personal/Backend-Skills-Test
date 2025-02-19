// ฟังก์ชันสำหรับหาผลรวมของตัวเลขแต่ละหลัก
function sumDigits(num) {
    let sum = 0;
    // แปลงตัวเลขเป็นค่าบวกและแปลงเป็นสตริง
    const str = Math.abs(num).toString();
    // วนลูปผ่านแต่ละตัวอักษรในสตริง
    for (let i = 0; i < str.length; i++) {
        // แปลงตัวอักษรเป็นตัวเลขและเพิ่มไปยังผลรวม
        sum += parseInt(str[i], 10);
    }
    // คืนค่าผลรวม
    return sum;
}

// ตัวอย่างการใช้งาน
console.log(sumDigits(123)); // 6
console.log(sumDigits(-456)); // 15
console.log(sumDigits(0)); // 0