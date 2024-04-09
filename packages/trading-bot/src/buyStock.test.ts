import { buyStock } from './buyStock';

describe('buyStock', () => {
  it('should buy stocks', () => {
    const cash = 100;
    const price = 10;
    const result = buyStock(cash, price);
    expect(result).toEqual([10, 0]);
  });
  it('should buy stocks complex', () => {
    const cash = 10456000;
    const price = 50;
    const result = buyStock(cash, price);
    expect(result).toEqual([2091.2, 0]);
  });
});
// [2091.2, 1.4551915228366852e-11];
