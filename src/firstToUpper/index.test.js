import {firstToUpper} from "./index";

test('First to upper function', () => {
    expect(firstToUpper("first letter of each word to uppercase"))
        .toEqual("First Letter Of Each Word To Uppercase");
})