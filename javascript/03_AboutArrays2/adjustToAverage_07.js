// ฟังก์ชันสำหรับปรับค่าในอาเรย์ให้มีค่าเฉลี่ยตามที่กำหนด
function adjustToAverage(arr, targetAvg) {
    let currentSum = arr.reduce((sum, num) => sum + num, 0); // คำนวณผลรวมของอาเรย์ปัจจุบัน
    let currentLength = arr.length; // หาจำนวนสมาชิกของอาเรย์
    let requiredSum = targetAvg * currentLength; // คำนวณผลรวมที่ต้องการให้ได้ค่าเฉลี่ยเป้าหมาย
    let missingSum = requiredSum - currentSum; // คำนวณค่าที่ขาดไป
    
    // ถ้าผลรวมปัจจุบันเท่ากับผลรวมที่ต้องการ แสดงว่าไม่ต้องเพิ่มค่าใด ๆ
    if (missingSum === 0) {
        return arr;
    }
    
    // กระจายค่าที่ขาดไปให้สมาชิกทั้งหมดของอาเรย์
    let distributeValue = missingSum / currentLength;
    let adjustedArr = arr.map(num => num + distributeValue);
    
    return adjustedArr;
}

// ตัวอย่างการใช้งาน
console.log(adjustToAverage([1, 2, 3], 4)); // ควรได้ผลลัพธ์เป็นอาเรย์ใหม่ที่มีค่าเฉลี่ยเป็น 4
console.log(adjustToAverage([1, 2, 3], 2)); // ควรได้ผลลัพธ์เป็นอาเรย์ใหม่ที่มีค่าเฉลี่ยเป็น 2
console.log(adjustToAverage([1, 2, 3], 1)); // ควรได้ผลลัพธ์เป็นอาเรย์ใหม่ที่มีค่าเฉลี่ยเป็น 1