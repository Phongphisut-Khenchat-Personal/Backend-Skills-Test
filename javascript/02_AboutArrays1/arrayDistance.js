// โจทย์:หาระยะห่างและตำแหน่งของอาเรย์
// ให้ฟังก์ชัน findDistance(arr, num1, num2) คำนวณระยะห่างระหว่างค่าที่กำหนด (num1 และ num2) ในอาเรย์ arr และคืนค่าระยะห่างของตำแหน่งที่ใกล้ที่สุด

function findDistance(arr, num1, num2) {
    let pos1 = -1, pos2 = -1, minDist = Infinity;

    arr.forEach((num, i) => {
        if (num === num1) pos1 = i;
        if (num === num2) pos2 = i;
        if (pos1 !== -1 && pos2 !== -1) {
            minDist = Math.min(minDist, Math.abs(pos1 - pos2));
        }
    });

    return minDist === Infinity ? -1 : minDist;
}

console.log(findDistance([1, 3, 7, 5, 3, 7, 1], 3, 7)); // 1
console.log(findDistance([4, 8, 6, 3, 8, 9, 3], 8, 3)); // 2
console.log(findDistance([1, 2, 3, 4, 5], 6, 7)); // -1 (ไม่พบค่าที่กำหนด)
