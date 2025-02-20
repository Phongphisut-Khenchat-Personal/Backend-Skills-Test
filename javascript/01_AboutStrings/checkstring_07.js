// หาคำที่ยาวที่สุดในประโยค

function longestWord(sentence) {
    // แยกประโยคออกเป็นคำ ๆ โดยใช้ space เป็นตัวแยก
    const words = sentence.split(" ");
    
    // ใช้ reduce หาคำที่ยาวที่สุด
    const longest = words.reduce((longest, current) => {
      // ถ้าคำปัจจุบันยาวกว่าคำที่ยาวที่สุดที่เคยเจอ
      return current.length > longest.length ? current : longest;
    }, ""); // ค่าเริ่มต้นคือค่าว่าง
    
    return longest; // คืนค่าคำที่ยาวที่สุด
  }
  
  console.log(longestWord("I love programming in JavaScript")); // "programming"
    console.log(longestWord("I love programming in Python")); // "programming"
    console.log(longestWord("I love programming in Java")); // "programming"
    console.log(longestWord("I love programming in C")); // "programming"