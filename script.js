function firstWord(s) {
  // your code here
	if (s.length === 0) {
        return '';
    }

    // Find the index of the first space
    let spaceIndex = s.indexOf(' ');

    // Check if there is a space
    if (spaceIndex !== -1) {
        // Return substring up to the first space
        return s.substring(0, spaceIndex);
    } else {
        // Return the entire string if no space
        return s;
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
