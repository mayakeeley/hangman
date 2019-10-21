let letters

let render = (letter) => {
  document.getElementById("alphabet-buttons").insertAdjacentHTML("beforeend", `<button id="${letter}">${letter}</button>`)
}

for(let index = 0; index < 26; index ++){
  letters = String.fromCharCode(97 + index);
  render(letters)
}

