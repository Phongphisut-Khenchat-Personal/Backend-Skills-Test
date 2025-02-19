

// 1. ฟังก์ชันตรวจสอบข้อความ - ใช้สำหรับวิเคราะห์คุณสมบัติต่างๆ ของข้อความที่รับเข้ามา
function checkString(str) {
    // ตรวจสอบว่าข้อความว่างหรือเป็น null หรือไม่
    if (!str || str.length === 0) {
        return "ข้อความว่าง";
    }
    
    // ใช้ Regular Expression ตรวจสอบว่ามีตัวเลขในข้อความหรือไม่
    const hasNumbers = /\d/.test(str);
    
    // ตรวจสอบว่ามีตัวอักษรพิเศษหรือไม่
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(str);
    
    // ส่งคืนออบเจ็กต์ที่มีข้อมูลการวิเคราะห์
    return {
        length: str.length,                        // ความยาวของข้อความ
        hasNumbers: hasNumbers,                    // มีตัวเลขหรือไม่
        hasSpecialChars: hasSpecialChars,         // มีตัวอักษรพิเศษหรือไม่
        isUpperCase: str === str.toUpperCase(),   // เป็นตัวพิมพ์ใหญ่ทั้งหมดหรือไม่
        isLowerCase: str === str.toLowerCase()    // เป็นตัวพิมพ์เล็กทั้งหมดหรือไม่
    };
}

console.log(checkString("Hello123!"));
console.log(checkString("HELLO"));
console.log(checkString("1204"));