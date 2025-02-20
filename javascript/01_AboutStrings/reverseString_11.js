// ฟังก์ชันสำหรับกลับด้านข้อความ
function reverseString(str) {
    // แปลงข้อความเป็นอาร์เรย์ แล้วใช้เมธอด reverse() เพื่อกลับอาร์เรย์
    // จากนั้นแปลงอาร์เรย์กลับเป็นสตริงด้วย join('')
    return str.split('').reverse().join('');
}

// ทดสอบฟังก์ชัน
console.log(reverseString("hello")); // ผลลัพธ์: "olleh"
console.log(reverseString("world")); // ผลลัพธ์: "dlrow"
console.log(reverseString("JavaScript")); // ผลลัพธ์: "tpircSavaJ"
console.log(reverseString("programming")); // ผลลัพธ์: "gnimmargorp"
console.log(reverseString("coding")); // ผลลัพธ์: "gnidoc"