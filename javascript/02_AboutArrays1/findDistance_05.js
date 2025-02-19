// ข้อ 2: หาระยะห่างและตำแหน่งในอาเรย์
function findDistance(arr, target1, target2) {
    // หาตำแหน่งของ target1 ในอาเรย์
    let pos1 = arr.indexOf(target1);
    // หาตำแหน่งของ target2 ในอาเรย์
    let pos2 = arr.indexOf(target2);
    // ถ้าทั้งสองตำแหน่งไม่เท่ากับ -1 (หมายความว่าพบทั้งสองตัวในอาเรย์)
    // ให้คืนค่าระยะห่างระหว่างตำแหน่งทั้งสอง
    // ถ้าไม่พบตัวใดตัวหนึ่งในอาเรย์ ให้คืนค่า -1
    return pos1 !== -1 && pos2 !== -1 ? Math.abs(pos1 - pos2) : -1;
}

// ทดสอบกรณีต่างๆ
console.log(findDistance([1, 3, 7, 9, 3], 3, 9)); // 2
console.log(findDistance([1, 2, 3, 4, 5], 6, 7)); // -1
console.log(findDistance([1, 2, 3, 4, 5], 2, 4)); // 2
console.log(findDistance([1, 2, 3, 4, 5], 2, 2)); // 0
console.log(findDistance([1, 2, 3, 4, 5], 2, 1)); // 1