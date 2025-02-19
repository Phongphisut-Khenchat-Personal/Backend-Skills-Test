// ฟังก์ชันสำหรับหาลำดับตัวอักษรที่ซ้ำกันมากที่สุด
function exam02(input) {
    let maxCount = 0;
    let currentCount = 1;
    let result = [];
    
    // วนลูปผ่านข้อความเพื่อหาลำดับตัวอักษรที่ซ้ำกันมากที่สุด
    for (let i = 1; i < input.length; i++) {
        if (input[i] === input[i - 1]) {
            currentCount++;
        } else {
            currentCount = 1;
        }
        
        if (currentCount > maxCount) {
            maxCount = currentCount;
            result = [input[i]];
        } else if (currentCount === maxCount) {
            if (!result.includes(input[i])) {
                result.push(input[i]);
            }
        }
    }
    
    return result;
}

// ทดสอบกรณีต่างๆ
console.log(exam02("1100022232")); // Output: ['0', '2']
console.log(exam02("aaaaaa11112222233322a1111110")); // Output: ['a', '1']
console.log(exam02("abbbcccddeeeee")); // Output: ['e']
console.log(exam02("abbbcccddeeeeeee")); // Output: ['e']