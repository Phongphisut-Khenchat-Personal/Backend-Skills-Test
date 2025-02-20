// จัดกลุ่มค่าที่ใกล้เคียงกันในอาเรย์

function groupSimilar(arr, threshold) {
    // สร้างอาเรย์สำหรับเก็บกลุ่ม
    let groups = [];
    // สร้างตัวแปรสำหรับเก็บกลุ่มปัจจุบัน
    let currentGroup = [arr[0]];
  
    // ลูปผ่านทุกค่าในอาเรย์
    for (let i = 1; i < arr.length; i++) {
      // เช็คถ้าค่าปัจจุบันกับค่าที่อยู่ในกลุ่มก่อนหน้าใกล้เคียงกัน
      if (arr[i] - arr[i - 1] <= threshold) {
        // ถ้าใกล้เคียงกัน, ให้นำค่าเข้าไปในกลุ่มเดียวกัน
        currentGroup.push(arr[i]);
      } else {
        // ถ้าไม่ใกล้เคียงกัน, เริ่มกลุ่มใหม่
        groups.push(currentGroup);
        currentGroup = [arr[i]];
      }
    }
    
    // ใส่กลุ่มสุดท้ายที่เหลือไว้
    groups.push(currentGroup);
  
    return groups;
  }
  
  // ตัวอย่างการใช้งาน
  console.log(groupSimilar([1, 3, 4, 8, 10], 3));
  // Output: [[1, 3, 4], [8, 10]]
  console.log(groupSimilar([1, 3, 4, 8, 10], 2));  