function checkString(str) {
    // ตัวอย่างการตรวจสอบว่าเป็น palindrome หรือไม่
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  
  // ตัวอย่างการใช้งาน
  console.log(checkString("A man, a plan, a canal: Panama")); // true
  console.log(checkString("hello")); // false
  console.log(checkString("12321")); // true