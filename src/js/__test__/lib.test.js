import {bonus} from "../lib.js";

test('should bonus', ()=>{
const items = [8000, 10000,13000,20000];
const expected = 650;

const result = bonus(items);
expect(result).toBe(expected);
});