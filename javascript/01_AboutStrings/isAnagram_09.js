// ฟังก์ชันเพื่อตรวจสอบว่า 2 string เป็น anagram หรือไม่
function isAnagram(str1, str2) {
    // หากความยาวของทั้งสอง string ไม่เท่ากัน จะไม่เป็น anagram
    if (str1.length !== str2.length) {
      return false;
    }
  
    // แปลง string ทั้งสองให้เป็น array ของตัวอักษร แล้ว sort ตัวอักษร
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    // เปรียบเทียบ string ที่จัดเรียงแล้ว
    return sortedStr1 === sortedStr2;
  }
  
  // ทดสอบการทำงาน
  console.log(isAnagram("listen", "silent")); // true
  console.log(isAnagram("hello", "world")); // false
    console.log(isAnagram("hello", "olleh")); // true
    console.log(isAnagram("hello", "hello")); // true
    console.log(isAnagram("hello", "olle")); // false