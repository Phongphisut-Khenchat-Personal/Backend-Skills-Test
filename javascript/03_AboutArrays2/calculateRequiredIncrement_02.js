

// 3. ฟังก์ชันคำนวณจำนวนครั้งที่ต้องเพิ่มค่า - ใช้หาจำนวนครั้งที่ต้องเพิ่มค่าเพื่อให้ถึงเป้าหมาย
function calculateRequiredIncrement(arr, target) {
    // ตรวจสอบอาเรย์ว่างหรือเป็น null
    if (!arr || arr.length === 0) return null;
    
    // สร้างอาเรย์ใหม่เพื่อไม่ให้กระทบข้อมูลต้นฉบับ
    let tempArr = [...arr];
    let incrementCount = 0;
    
    // วนลูปเพิ่มค่าจนกว่าจะถึงเป้าหมาย
    while (Math.max(...tempArr) < target) {
        // หาตำแหน่งของค่าน้อยที่สุด
        const minIndex = tempArr.indexOf(Math.min(...tempArr));
        // เพิ่มค่าที่ตำแหน่งนั้น
        tempArr[minIndex]++;
        incrementCount++;
    }
    
    return {
        originalArray: arr,          // อาเรย์ต้นฉบับ
        finalArray: tempArr,         // อาเรย์หลังการเพิ่มค่า
        incrementsNeeded: incrementCount  // จำนวนครั้งที่ต้องเพิ่มค่า
    };
}

console.log(calculateRequiredIncrement([1, 2, 3], 5));