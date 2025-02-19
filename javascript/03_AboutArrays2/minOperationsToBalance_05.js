function minOperationsToBalance(arr) {
    // ตัวอย่างการคำนวณจำนวนการเพิ่มค่าที่น้อยที่สุดเพื่อให้ทุกตัวในอาเรย์เท่ากัน
    if (arr.length <= 1) return 0;
    
    // หาค่าเฉลี่ยและปัดเศษ (อาจเป็นวิธีหนึ่งที่เหมาะสม)
    const sum = arr.reduce((a, b) => a + b, 0);
    const target = Math.ceil(sum / arr.length);
    
    let operations = 0;
    for (let num of arr) {
      if (num < target) {
        operations += (target - num);
      }
    }
    
    return operations;
  }
  
  // ตัวอย่างการใช้งาน
  console.log(minOperationsToBalance([1, 2, 3, 4])); // 6 (ทำให้ทุกตัวเป็น 4)
  console.log(minOperationsToBalance([1, 1, 1, 1])); // 0 (ไม่ต้องทำอะไรเลย)
  console.log(minOperationsToBalance([1, 2, 3, 4, 5])); // 5 (ทำให้ทุกตัวเป็น 3)