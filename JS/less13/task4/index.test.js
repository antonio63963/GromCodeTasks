import {
    increaseEvenEl,
    cloneArr,
    transformToObject,
    concatProps
} from './index.js';
//#1
it('should get Null if arr isnt arr', () => {
    const result = increaseEvenEl('', 10);
    expect(result).toEqual(null);
});
//#2
it('should get increased even numbers', () => {
    const result = increaseEvenEl([10, 12, 3, 5, 4], 10);
    expect(result).toEqual([20, 22, 3, 5, 14]);
});
// #3
it('should get src arr if it doesnt have even numbers', () => {
    const result = increaseEvenEl([3, 5, 7], 10);
    expect(result).toEqual([3, 5, 7]);
});
// #4
it('should get src arr if it includes not just numbers', () => {
    const result = increaseEvenEl([3, 5, 7, ' ', NaN, undefined, null], 10);
    expect(result).toEqual([3, 5, 7]);
});
// ===============================
// cloneArr
// #5
it("should get not changed src arr", () => {
    let srcArr = [10, 12, 3, 5, 4];
    let newArr = cloneArr(srcArr);
    let newArrChanged = newArr.map(item => item + 3);
    expect(srcArr).toEqual([10, 12, 3, 5, 4]);
});
// #6
it('should get Null if arr isnt arr', () => {
    const result = cloneArr('');
    expect(result).toEqual(null);
});
// #7
it("should get the same as a src arr", () => {
    let srcArr = [10, [12, 3, 5], 4];
    let newArr = cloneArr(srcArr);
    
    expect(newArr).toEqual([10, [12, 3, 5], 4]);
});
// #8
it("should get not changed src arr if if src arr includes nested arr", () => {
    let arrNum2 = [10, [12, 3, 5], 4];
    let newArr = cloneArr(arrNum2);
    newArr.forEach(item => {
        if (typeof item == 'object') {
            item[0] = 444;
        }
    });

    expect(arrNum2).toEqual([10, [12, 3, 5], 4]);
});
// ================================================
// transformToObject
// #9
it("should get 'undefined'", () => {
    let result = transformToObject('121212');
    expect(result).toEqual(undefined);
});
// #10
it("should get value of key", () => {
    let result = transformToObject(['name', 'address']);
    expect(result.name).toEqual('name');
});

// #11
it("should get the same length as an array length", () => {
    let result = transformToObject(['name', 'address']);
    let resLength = Object.keys(result);
    expect(['name', 'address'].length).toEqual(resLength.length);
});

// ==================================================
// concatProps
// #12
it("should get the same length as the srs", () => {
    const obj = {
        name: 'John',
        age: 34,
        active: true,
    };
    let result = concatProps(obj);
    expect(result.length).toEqual(Object.keys(obj).length);
});
// #13
it("should get arr values of obj keys", () => {
    const obj = {
        name: 'John',
        age: 34,
        active: true,
    };
    let result = concatProps(obj);
    expect(result).toEqual([obj.name, obj.age, obj.active]);
});
// #14
it("should get split string to arr", () => {
    const myString = '123ns';
    let result = concatProps(myString);
    expect(result).toEqual(['1','2','3','n','s']);
});