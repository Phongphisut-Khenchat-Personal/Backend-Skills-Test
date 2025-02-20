// แทนที่คำในประโยค

// ฟังก์ชัน replaceWord ใช้แทนที่คำในประโยค
function replaceWord(sentence, oldWord, newWord) {
    // ใช้เมธอด replace เพื่อแทนที่คำ
    return sentence.replace(oldWord, newWord);
}

// เรียกใช้ฟังก์ชันและแสดงผลลัพธ์
console.log(replaceWord("I love coding", "love", "hate")); 
// "I hate coding"
console.log(replaceWord("I love coding", "coding", "programming"));
// "I love programming"
console.log(replaceWord("I love coding", "I", "We"));
// "We love coding"