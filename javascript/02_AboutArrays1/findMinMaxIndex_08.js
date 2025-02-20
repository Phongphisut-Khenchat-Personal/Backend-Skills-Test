// ค้นหาตำแหน่งของตัวเลขที่มากที่สุดและน้อยที่สุดในอาเรย์
function findMinMaxIndex(arr) {
    // กำหนดค่าตั้งต้นให้ min และ max เป็นค่าตัวแรกของอาเรย์
    let min = arr[0], max = arr[0];
    // กำหนดตำแหน่งเริ่มต้นของ min และ max เป็น index 0
    let minIndex = 0, maxIndex = 0;

    // วนลูปผ่านอาเรย์ตั้งแต่ index ที่ 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) { // ถ้าค่าปัจจุบันน้อยกว่า min
            min = arr[i];    // อัพเดท min
            minIndex = i;     // อัพเดทตำแหน่งของ min
        }
        if (arr[i] > max) { // ถ้าค่าปัจจุบันมากกว่า max
            max = arr[i];    // อัพเดท max
            maxIndex = i;     // อัพเดทตำแหน่งของ max
        }
    }
    
    // คืนค่าผลลัพธ์เป็น object
    return { min, max, minIndex, maxIndex };
}

// ตัวอย่างการใช้งาน
console.log(findMinMaxIndex([3, 1, 4, 1, 5, 9, 2]));
// ผลลัพธ์: { min: 1, max: 9, minIndex: 1, maxIndex: 5 }
console.log(findMinMaxIndex([1, 2, 3, 4, 5, 6, 7]));
// ผลลัพธ์: { min: 1, max: 7, minIndex: 0, maxIndex: 6 }
console.log(findMinMaxIndex([7, 6, 5, 4, 3, 2, 1]));