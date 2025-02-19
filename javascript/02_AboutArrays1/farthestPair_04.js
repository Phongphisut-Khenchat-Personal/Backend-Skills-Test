// หาตำแหน่งของตัวเลขที่ไกลกันมากที่สุดในอาเรย์
function farthestPair(arr) {
    let maxDist = -Infinity, pair = [];
    // วนลูปผ่านอาเรย์เพื่อหาคู่ตัวเลขที่ไกลกันที่สุด
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let dist = Math.abs(arr[i] - arr[j]);
            // ถ้าระยะห่างมากกว่าระยะห่างที่มากที่สุดที่พบเจอ
            if (dist > maxDist) {
                maxDist = dist;
                pair = [arr[i], arr[j]];
            }
        }
    }
    return pair;
}

// ทดสอบกรณีต่างๆ
console.log(farthestPair([4, 9, 1, 17, 3, 7])); // ตัวเลขที่ห่างกันที่สุด
console.log(farthestPair([1, 2, 3, 4, 5])); // ตัวเลขที่ห่างกันที่สุด
console.log(farthestPair([1, 2, 3, 4, 5, 6, 7, 8, 9])); // ตัวเลขที่ห่างกันที่สุด