// หาตำแหน่งของค่าที่ซ้ำกันในอาเรย์
function findDuplicateIndices(arr) {
    // สร้างออบเจกต์เพื่อเก็บตำแหน่งของค่าที่ซ้ำกัน
    const result = {};
  
    // วนลูปผ่านทุกค่าของอาเรย์
    arr.forEach((value, index) => {
      // ถ้าค่าในออบเจกต์ result ยังไม่มีค่า
      if (!result[value]) {
        result[value] = [];
      }
      // เพิ่มตำแหน่งที่พบค่าซ้ำในอาเรย์
      result[value].push(index);
    });
  
    // กรองผลลัพธ์เฉพาะค่าที่มีการซ้ำ
    for (let key in result) {
      if (result[key].length === 1) {
        delete result[key]; // ถ้าค่ามีแค่ 1 ตำแหน่ง จะไม่เก็บไว้
      }
    }
  
    return result;
  }
  
  // ทดสอบฟังก์ชัน
  console.log(findDuplicateIndices([1, 2, 3, 2, 1, 4, 5]));
  // ผลลัพธ์จะได้: { 1: [0, 4], 2: [1, 3] }
    console.log(findDuplicateIndices([1, 2, 3, 4, 5]));