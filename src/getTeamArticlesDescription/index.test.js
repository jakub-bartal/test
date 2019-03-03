import {getTeamArticlesDescription} from "./index";
import {result1, result2} from "./const";

test('Get team articles description function', () => {
    expect(getTeamArticlesDescription(1)).toEqual(result1);
    expect(getTeamArticlesDescription(2)).toEqual(result2);
})