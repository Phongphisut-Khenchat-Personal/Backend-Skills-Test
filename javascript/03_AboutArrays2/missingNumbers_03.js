// หาว่าต้องเพิ่มค่ากี่ตัวเพื่อให้อาเรย์เป็นเลขเรียงกัน
function missingNumbers(arr) {
    // เรียงลำดับอาเรย์จากน้อยไปมาก
    arr.sort((a, b) => a - b);
    let count = 0;
    // วนลูปผ่านอาเรย์เพื่อหาจำนวนตัวเลขที่ขาดหายไป
    for (let i = 0; i < arr.length - 1; i++) {
        count += arr[i + 1] - arr[i] - 1;
    }
    return count;
}

// ทดสอบกรณีต่างๆ
console.log(missingNumbers([1, 3, 7, 9])); // ต้องเพิ่มกี่ตัวถึงจะเป็นเลขเรียงกัน
console.log(missingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])); // ไม่ต้องเพิ่มเลย
console.log(missingNumbers([1, 2, 4, 5, 6, 8, 9])); // ต้องเพิ่มกี่ตัวถึงจะเป็นเลขเรียงกัน