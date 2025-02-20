function countBinaryOnes(n) {
    let count = 0; // ตัวแปรสำหรับเก็บจำนวน 1
    while (n > 0) { // วนลูปจนกว่า n จะเป็น 0
        count += n % 2; // ตรวจสอบว่าหลักสุดท้ายเป็น 1 หรือไม่
        n = Math.floor(n / 2); // ตัดหลักสุดท้ายออก (หาร 2 ปัดเศษลง)
    }
    return count; // คืนค่าจำนวน 1 ที่พบ
}

// ตัวอย่างการใช้งานและการทดสอบฟังก์ชัน
console.log(countBinaryOnes(13)); // 3 ("1101" มี 3 ตัว)
console.log(countBinaryOnes(47)); // 3 ("101111" มี 3 ตัว)




// function countBinaryOnes(n) {
//     return n.toString(2).split('1').length - 1;
// }

// console.log(countBinaryOnes(13)); // 3
// console.log(countBinaryOnes(47)); // 3
// console.log(countBinaryOnes(0)); // 0