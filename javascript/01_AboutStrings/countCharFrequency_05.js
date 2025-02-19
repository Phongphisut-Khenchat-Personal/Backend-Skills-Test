function countCharFrequency(str) {
    const frequency = {};
    
    for (let char of str) {
      if (char !== ' ') {
        frequency[char] = (frequency[char] || 0) + 1;
      }
    }
    
    return frequency;
  }
  
  console.log(countCharFrequency("hello world"));
  console.log(countCharFrequency("The quick brown fox jumps over the lazy dog"));
  console.log(countCharFrequency("aaabbbccc"));