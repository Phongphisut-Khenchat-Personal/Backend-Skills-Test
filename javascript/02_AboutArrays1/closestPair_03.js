// หาตำแหน่งของตัวเลขที่ใกล้กันมากที่สุดในอาเรย์
function closestPair(arr) {
    let minDist = Infinity, pair = [];
    // วนลูปผ่านอาเรย์เพื่อหาคู่ตัวเลขที่ใกล้กันที่สุด
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let dist = Math.abs(arr[i] - arr[j]);
            // ถ้าระยะห่างน้อยกว่าระยะห่างที่น้อยที่สุดที่พบเจอ
            if (dist < minDist) {
                minDist = dist;
                pair = [arr[i], arr[j]];
            }
        }
    }
    return pair;
}

// ทดสอบกรณีต่างๆ
console.log(closestPair([4, 9, 1, 17, 3, 7])); // ตัวเลขที่ใกล้กันที่สุด
console.log(closestPair([1, 2, 3, 4, 5])); // ตัวเลขที่ใกล้กันที่สุด
console.log(closestPair([1, 2, 3, 4, 5, 6, 7, 8, 9])); // ตัวเลขที่ใกล้กันที่สุด