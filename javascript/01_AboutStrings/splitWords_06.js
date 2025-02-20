// ตัดคำแบบ Snake Case และ Camel Case

// ฟังก์ชันในการแยกคำจาก CamelCase และ Snake_case
function splitWords(str) {
    // ใช้ regular expression เพื่อตรวจสอบว่าเป็น CamelCase หรือ Snake_case
    // สำหรับ CamelCase, จะแบ่งคำเมื่อพบตัวอักษรตัวใหญ่
    // สำหรับ Snake_case, จะแบ่งคำที่มี '_' (underscore)
    return str.split(/(?=[A-Z])|_/).map(word => word.toLowerCase()); // เปลี่ยนคำให้เป็น lowercase
  }
  
  // ทดสอบ
  console.log(splitWords("helloWorld")); // ["hello", "world"]
  console.log(splitWords("hello_world")); // ["hello", "world"]
    console.log(splitWords("snake_case")); // ["snake", "case"]