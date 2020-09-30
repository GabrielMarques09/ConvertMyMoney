const convert = require('./convert')

test('converts cotação 4 anda quantidade 4', () => {
    expect(convert.convert(4, 4)).toBe(16)
})
test('converts cotação 0 anda quantidade 4', () => {
    expect(convert.convert(0, 4)).toBe(0)
})
test('toMoney converts float', () => {
    expect(convert.toMoney(2)).toBe('2.00')
})