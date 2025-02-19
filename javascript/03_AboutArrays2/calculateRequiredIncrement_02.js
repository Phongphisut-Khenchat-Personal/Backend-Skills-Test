function calculateRequiredIncrement(arr, target) {
    // ตรวจสอบว่าอาเรย์เป็น null หรือว่าง หากใช่ให้คืนค่า null
    if (!arr || arr.length === 0) {
        return null;
    }

    let tempArr = arr.slice(); // คัดลอกอาเรย์ต้นฉบับเพื่อไม่ให้ข้อมูลเดิมเปลี่ยนแปลง
    let count = 0; // ตัวนับจำนวนครั้งที่เพิ่มค่า

    // วนลูปจนกว่าค่ามากที่สุดในอาเรย์จะถึงเป้าหมาย
    while (true) {
        let maxValue = Math.max(...tempArr); // หาค่าสูงสุดในอาเรย์

        // ถ้าค่าสูงสุดมากกว่าหรือเท่ากับเป้าหมาย ให้ออกจากลูป
        if (maxValue >= target) {
            break;
        }

        let minValue = Math.min(...tempArr); // หาค่าต่ำสุดในอาเรย์
        let minIndex = tempArr.indexOf(minValue); // หาตำแหน่งของค่าต่ำสุด

        tempArr[minIndex]++; // เพิ่มค่าที่ตำแหน่งที่ต่ำสุดขึ้น 1
        count++; // เพิ่มตัวนับจำนวนครั้งที่เพิ่มค่า
    }

    // คืนค่าเป็นออบเจ็กต์ที่แสดงข้อมูลสำคัญ
    return {
        originalArray: arr, // อาเรย์ต้นฉบับ
        finalArray: tempArr, // อาเรย์หลังการเพิ่มค่า
        incrementsNeeded: count // จำนวนครั้งที่ต้องเพิ่มค่า
    };
}

// ตัวอย่างการใช้งาน
console.log(calculateRequiredIncrement([1, 2, 3], 5));
