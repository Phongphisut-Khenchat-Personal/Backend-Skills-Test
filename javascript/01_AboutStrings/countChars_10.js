// นับจำนวนตัวอักษรที่ซ้ำกัน
function countChars(str) {
    // สร้างอ็อบเจ็กต์สำหรับเก็บจำนวนตัวอักษร
    const charCount = {};
  
    // วนลูปผ่านแต่ละตัวอักษรในสตริง
    for (let char of str) {
      // ถ้าตัวอักษรนั้นยังไม่เคยถูกนับ ก็เริ่มนับจาก 1
      if (charCount[char]) {
        charCount[char] += 1;
      } else {
        // ถ้ายังไม่เคยเจอ ให้เพิ่มเข้าไปในอ็อบเจ็กต์พร้อมเริ่มนับจาก 1
        charCount[char] = 1;
      }
    }
  
    // คืนค่าอ็อบเจ็กต์ที่เก็บจำนวนตัวอักษรที่ซ้ำกัน
    return charCount;
  }
  
  console.log(countChars("banana")); 
  // Output: { b: 1, a: 3, n: 2 }
    console.log(countChars("apple"));
    // Output: { a: 1, p: 2, l: 1, e: 1 }
    console.log(countChars("hello"));
    // Output: { h: 1, e: 1, l: 2, o: 1 }  