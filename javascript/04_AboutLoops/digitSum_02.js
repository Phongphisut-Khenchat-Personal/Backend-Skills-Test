// ฟังก์ชันวิเคราะห์ตัวเลข
function digitSum(number) {
    // แปลงตัวเลขเป็นค่าบวกและเป็นสตริง
    let numStr = Math.abs(number).toString();
    let sum = 0;
    let products = 1;
    let digitArray = [];
    
    // วนลูปผ่านแต่ละตัวอักษรในสตริงที่แปลงจากตัวเลข
    for (let i = 0; i < numStr.length; i++) {
        // แปลงตัวอักษรเป็นตัวเลข
        const digit = parseInt(numStr[i]);
        // บวกตัวเลขเข้ากับผลรวม
        sum += digit;
        // คูณตัวเลขเข้ากับผลคูณ
        products *= digit;
        // เพิ่มตัวเลขลงในอาร์เรย์ของตัวเลข
        digitArray.push(digit);
    }
    
    // คืนค่าเป็นออบเจ็กต์ที่มีการวิเคราะห์ตัวเลข
    return {
        originalNumber: number, // ตัวเลขต้นฉบับ
        digits: digitArray, // อาร์เรย์ของตัวเลข
        sum: sum, // ผลรวมของตัวเลข
        product: products, // ผลคูณของตัวเลข
        numberOfDigits: numStr.length // จำนวนหลักของตัวเลข
    };
}

// ตัวอย่างการใช้งาน: วิเคราะห์ตัวเลข 12345 และพิมพ์ผลลัพธ์
console.log(digitSum(12345));