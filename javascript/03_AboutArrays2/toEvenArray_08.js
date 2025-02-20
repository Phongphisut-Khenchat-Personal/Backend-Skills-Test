// ฟังก์ชันแปลงค่าทั้งหมดในอาเรย์ให้เป็นเลขคู่
function toEvenArray(arr) {
    return arr.map(num => num % 2 === 0 ? num : num + 1);
}

// ทดสอบฟังก์ชัน
console.log(toEvenArray([1, 2, 3, 4])); // [2, 2, 4, 4]
console.log(toEvenArray([1, 3, 5, 7])); // [2, 4, 6, 8]
console.log(toEvenArray([2, 4, 6, 8])); // [2, 4, 6, 8]