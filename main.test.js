import {wordChoices} from "./secondary.js"

describe("check if there are enough valid words to choose from", () => {
  test("check if there are at least 5 words to choose from", () => {
    expect(wordChoices.length).toBeGreaterThanOrEqual(5);
  })
  test("check if all the words have at least 7 characters", () => {
    expect(wordChoices[0].length).toBeGreaterThanOrEqual(7);
    expect(wordChoices[2].length).toBeGreaterThanOrEqual(7);
    expect(wordChoices[4].length).toBeGreaterThanOrEqual(7);
  })
})

// describe("check when you pick a letter whether the word includes it", () => {
//   let word = "blackbeard";
//   let letters = ["a", "s", "t", "b"];
//   test("check if the letter is included in the word", () => {

//   })
//   test("check if the letter is visible or not if button is selected", () => {

//   })
// })

// describe("check if man is alive", () => {
//   test("check if number of incorrect guesses is less than 5", () => {

//   })
//   test("check if man is alive", () => {

//   })
// })
