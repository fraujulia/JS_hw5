function enterWord() {
  let answer = true;
  let words = "";
  let currentWord;

  for (let i = 0; true; i++) {
    if (i !==0 && i % 3 === 0) {
      answer = confirm("Do you want to continue?");
    }
    if (!answer) {
      break;
    }
    currentWord = prompt("Enter word");
    words = words + currentWord;
    if (currentWord === "break") break;
    if (answer === false) break;
    else;
    console.log(words);
  }
}

enterWord();


