const sum = require('./add');

test('It should be a proper addition',()=>{
    expect(sum(1,2)).toBe(3)
})
test('It should be add two char',()=>{
    expect(sum('a','b')).toBe('ab')
})
test('It should add two string',()=>{
    expect(sum('Jivan','Ghadage')).toBe('JivanGhadage')
})
test('It should be a proper addition with defferent sign',()=>{
    expect(sum(-3,+4)).toBe(1)
})
test('It should return string as result',()=>{
    expect(sum(3,'a')).toBe('3a')
})
