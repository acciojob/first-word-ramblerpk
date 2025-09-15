function firstWord(s) {
    // Handle empty string
    if (s.length === 0) {
        return '';
    }
    
    // Split the string by spaces and filter out empty strings
    const words = s.split(' ').filter(word => word.length > 0);
    
    // If no words found, return empty string
    if (words.length === 0) {
        return '';
    }
    
    // Return the first word
    return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
