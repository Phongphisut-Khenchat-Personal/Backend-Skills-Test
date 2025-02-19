function countCharFrequency(str) {
  const frequency = {}; // สร้างออบเจ็กต์เก็บจำนวนตัวอักษร

  for (let char of str) {
      if (char === ' ') continue; // ข้ามช่องว่าง

      // เพิ่มจำนวนครั้งที่พบตัวอักษร
      if (frequency[char]) {
          frequency[char]++;
      } else {
          frequency[char] = 1;
      }
  }

  return frequency; // คืนค่าออบเจ็กต์ที่เก็บจำนวนตัวอักษร
}

// ตัวอย่างการใช้งาน
console.log(countCharFrequency("hello world")); 
console.log(countCharFrequency("The quick brown fox jumps over the lazy dog"));
console.log(countCharFrequency("aaabbbccc"));
