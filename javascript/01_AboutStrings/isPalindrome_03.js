// ตรวจสอบว่าข้อความเป็นพาลินโดรมหรือไม่
function isPalindrome(str) {
    // แปลงข้อความเป็นตัวพิมพ์เล็กและลบอักขระที่ไม่ใช่ตัวอักษรหรือตัวเลขทั้งหมด
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // ตรวจสอบว่าข้อความที่ทำความสะอาดแล้วเท่ากับข้อความที่กลับด้านหรือไม่
    return cleaned === cleaned.split('').reverse().join('');
}

// ทดสอบกรณีต่างๆ
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("12345")); // false