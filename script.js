function firstWord(s) {
  // your code here
	if(s.lenght===0){
		return '';
	}
	let spaceIndex = s.indexOf(' ');
	if(spaceIndex !== -1){
		return s.substring(0, spaceIndex);
	}
	else {
		return s;
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
