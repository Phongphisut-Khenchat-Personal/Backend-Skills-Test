// หาค่าที่พบมากที่สุดในอาเรย์

function mostFrequent(arr) {
    // สร้างวัตถุเพื่อเก็บจำนวนการปรากฏของแต่ละค่า
    let frequency = {};

    // วนลูปอาเรย์เพื่อนับจำนวนของแต่ละค่า
    for (let num of arr) {
        // ถ้าค่านั้นยังไม่มีในวัตถุ frequency ให้เพิ่มเข้าไป
        if (frequency[num]) {
            frequency[num] += 1;
        } else {
            frequency[num] = 1;
        }
    }

    // กำหนดค่าตัวแปรเพื่อเก็บค่าที่พบมากที่สุด
    let mostFrequentValue = arr[0];
    let maxCount = 1;

    // วนลูปตรวจสอบหาค่าที่มีจำนวนมากที่สุด
    for (let num in frequency) {
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequentValue = num;
        }
    }

    // คืนค่าที่พบมากที่สุด
    return mostFrequentValue;
}

console.log(mostFrequent([1, 2, 3, 2, 4, 2, 5])); // 2
console.log(mostFrequent([1, 2, 3, 4, 5])); // 1
console.log(mostFrequent([1, 1, 1, 1, 1])); // 1
console.log(mostFrequent([1, 2, 3, 4, 5, 5, 5, 5])); // 5