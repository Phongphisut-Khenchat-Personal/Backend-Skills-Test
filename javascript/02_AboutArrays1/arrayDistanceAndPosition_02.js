

// 2. ฟังก์ชันหาระยะห่างและตำแหน่งในอาเรย์ - ใช้วิเคราะห์ตำแหน่งและระยะห่างของค่าที่ซ้ำกันในอาเรย์
function arrayDistanceAndPosition(arr) {
    // ตรวจสอบว่าอาเรย์ว่างหรือเป็น null หรือไม่
    if (!arr || arr.length === 0) return null;
    
    // สร้างออบเจ็กต์เก็บผลลัพธ์
    const result = {
        minDistance: Infinity,           // ระยะห่างน้อยที่สุดระหว่างค่าที่ซ้ำกัน
        maxDistance: -Infinity,          // ระยะห่างมากที่สุดระหว่างค่าที่ซ้ำกัน
        positions: {}                    // เก็บตำแหน่งของแต่ละค่า
    };
    
    // วนลูปเก็บตำแหน่งของแต่ละค่าในอาเรย์
    arr.forEach((value, index) => {
        if (!result.positions[value]) {
            result.positions[value] = [];
        }
        result.positions[value].push(index);
    });
    
    // คำนวณระยะห่างระหว่างค่าที่ซ้ำกัน
    Object.values(result.positions).forEach(positions => {
        if (positions.length > 1) {
            for (let i = 1; i < positions.length; i++) {
                const distance = positions[i] - positions[i-1];
                result.minDistance = Math.min(result.minDistance, distance);
                result.maxDistance = Math.max(result.maxDistance, distance);
            }
        }
    });
    
    return result;
}

console.log(arrayDistanceAndPosition([1, 2, 1, 3, 2, 1]));