/*function askOperation() {
    let newWord;
    let words = '';

    while (true) {
      newWord = prompt("Enter word");
      words = words + newWord;
      console.log(words);
      if (newWord === "break") {
        break;
      }
    }
  }
  askOperation()
*/

function enterWord() {
  let newWord;
  let words = "";
  let result;

  while (true) {
    newWord = prompt("Enter word");
    words = words + newWord;
    console.log(words);
    newWord = prompt("Enter word");
    words = words + newWord;
    console.log(words);
    newWord = prompt("Enter word");
    words = words + newWord;
    console.log(words);
    if (newWord === "break") break;
    result = confirm("Do you want to continue?");
    if (result === false) break;
    else continue;
  }
}

enterWord();
