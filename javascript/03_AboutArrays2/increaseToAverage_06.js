// ฟังก์ชันเพิ่มตัวเลขในอาเรย์จนกว่าค่าเฉลี่ยจะถึงเป้าหมายที่กำหนด
function increaseToAverage(arr, target) {
    let sum = arr.reduce((sum, num) => sum + num, 0);
    let count = arr.length;
    
    // คำนวณจำนวนตัวเลขที่ต้องเพิ่ม
    while (sum / count < target) {
        sum += target;
        count++;
        arr.push(target);
    }
    
    return arr;
}

// ทดสอบการใช้งาน
console.log(increaseToAverage([1, 2, 3], 5));
console.log(increaseToAverage([1, 2, 3], 2));
console.log(increaseToAverage([1, 2, 3], 1));