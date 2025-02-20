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



// // ฟังก์ชันที่ใช้เช็คว่า string เป็น palindrome หรือไม่
// function isPalindrome(str) {
//     // แปลง string เป็นตัวพิมพ์เล็กทั้งหมด เพื่อให้การเปรียบเทียบไม่สนใจตัวพิมพ์ใหญ่/เล็ก
//     str = str.toLowerCase();
    
//     // ล้วนกลับ string เพื่อให้เปรียบเทียบกับ string ต้นฉบับ
//     const reversedStr = str.split('').reverse().join('');
    
//     // เช็คว่า string ต้นฉบับและ string ที่กลับแล้วเหมือนกันหรือไม่
//     return str === reversedStr;
//   }
  
//   // ทดสอบฟังก์ชัน
//   console.log(isPalindrome("racecar"));  // true
//   console.log(isPalindrome("hello"));    // false
//     console.log(isPalindrome("level"));    // true
