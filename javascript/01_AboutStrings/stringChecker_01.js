// โจทย์:ตรวจสอบข้อความ
// เขียนฟังก์ชัน isValidMessage(message) เพื่อตรวจสอบว่าข้อความที่ได้รับมีเงื่อนไขดังนี้หรือไม่

// ต้องมีความยาวตั้งแต่ 5 ถึง 20 ตัวอักษร
// ต้องมีตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก และตัวเลขอย่างน้อยอย่างละหนึ่งตัว
// ห้ามมีอักขระพิเศษ (ยกเว้น _ และ -)

function isValidMessage(message) {
    // ตรวจสอบความยาวของข้อความ
    if (message.length < 5 || message.length > 20) return false;
    // ตรวจสอบว่ามีตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก และตัวเลขอย่างละหนึ่งตัว
    if (!/[A-Z]/.test(message) || !/[a-z]/.test(message) || !/[0-9]/.test(message)) return false;
    // ตรวจสอบว่าไม่มีอักขระพิเศษ (ยกเว้น _ และ -)
    if (/[^A-Za-z0-9_-]/.test(message)) return false;
    return true; // ถ้าผ่านทุกเงื่อนไข คืนค่า true
}

// ตัวอย่างการใช้งานและการทดสอบฟังก์ชัน
console.log(isValidMessage("Hello123")); // true
console.log(isValidMessage("hello")); // false (ไม่มีตัวเลข)
console.log(isValidMessage("HELLO1")); // false (ไม่มีตัวพิมพ์เล็ก)
console.log(isValidMessage("Hello!@#")); // false (มีอักขระพิเศษ)