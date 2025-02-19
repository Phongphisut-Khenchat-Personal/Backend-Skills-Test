// โจทย์:คำนวณค่าที่ต้องเพิ่มเพื่อให้เป็นไปตามเงื่อนไข
// ให้ฟังก์ชัน adjustArray(arr, targetSum) รับอาเรย์ของตัวเลข arr และค่าผลรวมเป้าหมาย targetSum 
// และหาค่าที่ต้องเพิ่มให้กับตัวเลขตัวใดตัวหนึ่งเพื่อให้ผลรวมอาเรย์เท่ากับ targetSum โดยคืนค่าความแตกต่างที่ต้องเพิ่ม

function adjustArray(arr, targetSum) {
    // คำนวณผลรวมปัจจุบันของอาเรย์
    let currentSum = arr.reduce((sum, num) => sum + num, 0);
    // คืนค่าความแตกต่างที่ต้องเพิ่มเพื่อให้ผลรวมเท่ากับ targetSum
    return targetSum - currentSum;
}

// ตัวอย่างการใช้งานและการทดสอบฟังก์ชัน
console.log(adjustArray([10, 20, 30], 100)); // 40
console.log(adjustArray([5, 15, 10], 50)); // 20
console.log(adjustArray([2, 4, 6, 8], 30)); // 10