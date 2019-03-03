import {coolAdd} from "./index";

test('Cool add function', () => {
    expect(coolAdd(1, 2)).toBe(3);
    expect(coolAdd(1)(2)).toBe(3);
})