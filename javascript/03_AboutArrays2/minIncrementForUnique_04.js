// ฟังก์ชันสำหรับหาจำนวนครั้งที่ต้องเพิ่มค่าในอาเรย์เพื่อให้ทุกค่ามีความเป็นเอกลักษณ์
function minIncrementForUnique(arr) {
    // เรียงลำดับอาเรย์จากน้อยไปมาก
    arr.sort((a, b) => a - b);
    let increments = 0;
    // วนลูปผ่านอาเรย์เริ่มจากตำแหน่งที่ 1
    for (let i = 1; i < arr.length; i++) {
        // ถ้าค่าปัจจุบันน้อยกว่าหรือเท่ากับค่าก่อนหน้า
        if (arr[i] <= arr[i - 1]) {
            // คำนวณค่าที่ต้องเพิ่มเพื่อให้ค่าปัจจุบันมากกว่าค่าก่อนหน้า
            const needed = arr[i - 1] + 1 - arr[i];
            // เพิ่มค่าที่ต้องเพิ่มไปยังตัวแปร increments
            increments += needed;
            // อัปเดตค่าปัจจุบันให้เป็นค่าที่มากกว่าค่าก่อนหน้า
            arr[i] = arr[i - 1] + 1;
        }
    }
    // คืนค่าจำนวนครั้งที่ต้องเพิ่ม
    return increments;
}

// ตัวอย่างการใช้งาน
console.log(minIncrementForUnique([1, 2, 2])); // 1
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7])); // 6
console.log(minIncrementForUnique([1, 2, 2, 3, 3, 4, 4])); // 6