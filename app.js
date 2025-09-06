const inputField = document.querySelector("#input");

const button = document.querySelector("#submit");
const result = document.querySelector("#result");

button.addEventListener("click", function () {
  let word = inputField.value.toLowerCase();
  const vowel = ["a", "e", "o", "i", "u"];
  const characters = word.split("");
  let count = 0;

  for (let i = 0; i < characters.length; i++) {
    const element = characters[i];
    if (vowel.some((el) => element.includes(el))) {
      count += 1;
    }
    if (count == 0) {
      result.innerHTML =
        " number of vowel characters :  no vowel characters found ";
    } else {
      result.innerHTML =
        " number of vowel characters : <span>" + `${count}` + "</span>";
    }
  }
});
