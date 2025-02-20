// หาตำแหน่งของค่าเฉพาะในอาเรย์
function findIndices(arr, target) {
    let indices = []; // สร้างอาเรย์เปล่าสำหรับเก็บตำแหน่งที่พบค่า
  
    // ใช้ for loop เพื่อตรวจสอบค่าทุกตัวในอาเรย์
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        indices.push(i); // ถ้าพบค่าตรงกับ target ให้เก็บตำแหน่งลงในอาเรย์ indices
      }
    }
  
    return indices; // คืนค่าผลลัพธ์เป็นอาเรย์ของตำแหน่งที่พบ
  }
  
  // ตัวอย่างการใช้งาน
  console.log(findIndices([1, 2, 3, 2, 4, 5], 2)); // [1, 3]
    console.log(findIndices([1, 2, 3, 2, 4, 5], 5)); // [5]
    console.log(findIndices([1, 2, 3, 2, 4, 5], 6)); // []
    console.log(findIndices([1, 2, 3, 2, 4, 5], 1)); // [0]  