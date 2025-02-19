// ฟังก์ชันสำหรับหาระยะห่างที่น้อยที่สุดระหว่าง x และ y ในอาเรย์
function findMinDistance(arr, x, y) {
    // กำหนดตำแหน่งเริ่มต้นของ x และ y เป็น -1
    let posX = -1, posY = -1;
    // กำหนดระยะห่างที่น้อยที่สุดเป็น Infinity
    let minDist = Infinity;
    
    // วนลูปผ่านอาเรย์
    for (let i = 0; i < arr.length; i++) {
        // ถ้าพบ x ในอาเรย์ ให้บันทึกตำแหน่ง
        if (arr[i] === x) posX = i;
        // ถ้าพบ y ในอาเรย์ ให้บันทึกตำแหน่ง
        else if (arr[i] === y) posY = i;
        
        // ถ้าพบทั้ง x และ y ในอาเรย์
        if (posX !== -1 && posY !== -1) {
            // คำนวณระยะห่างระหว่างตำแหน่งของ x และ y และอัปเดตระยะห่างที่น้อยที่สุด
            minDist = Math.min(minDist, Math.abs(posX - posY));
        }
    }
    // ถ้าไม่พบ x หรือ y ในอาเรย์ ให้คืนค่า -1
    // ถ้าพบทั้ง x และ y ให้คืนค่าระยะห่างที่น้อยที่สุด
    return minDist === Infinity ? -1 : minDist;
}

// ตัวอย่างการใช้งาน
console.log(findMinDistance([3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3], 3, 6)); // 4
console.log(findMinDistance([1, 3, 7, 9, 3], 3, 9)); // 2
console.log(findMinDistance([1, 2, 3, 4, 5], 6, 7)); // -1