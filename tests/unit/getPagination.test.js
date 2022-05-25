import getPagination from "../../src/helper/pagination";

it('should return the right amount of data that database should skip', () => {
    const skip0 = getPagination(1)
    const skip1 = getPagination(2)
    const skip2 = getPagination(3)

    expect(skip0).toBe(0)
    expect(skip1).toBe(20)
    expect(skip2).toBe(40)

});