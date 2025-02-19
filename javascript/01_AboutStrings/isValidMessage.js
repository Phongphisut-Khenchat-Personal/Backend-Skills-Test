function isValidMessage(message, minLength, maxLength) {
    // ตรวจสอบความยาวของข้อความ
    if (message.length < minLength || message.length > maxLength) return false;

    // ตรวจสอบว่ามีตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก และตัวเลขอย่างละหนึ่งตัว
    if (!/[A-Z]/.test(message) || !/[a-z]/.test(message) || !/[0-9]/.test(message)) return false;

    // ตรวจสอบว่าไม่มีอักขระพิเศษ (ยกเว้น _ และ -)
    if (/[^A-Za-z0-9_-]/.test(message)) return false;

    return true; // ถ้าผ่านทุกเงื่อนไข คืนค่า true
}

// ตัวอย่างการใช้งานและการทดสอบฟังก์ชัน
console.log(isValidMessage("Hello123", 5, 20)); // true
console.log(isValidMessage("hello", 5, 20)); // false (ไม่มีตัวเลข)
console.log(isValidMessage("HELLO1", 5, 20)); // false (ไม่มีตัวพิมพ์เล็ก)
console.log(isValidMessage("Hi1", 3, 10)); // true (ผ่านทุกเงื่อนไข)
console.log(isValidMessage("A1_", 4, 10)); // false (สั้นเกินไป)
console.log(isValidMessage("LongMessage123-", 5, 15)); // false (ยาวเกินไป)
