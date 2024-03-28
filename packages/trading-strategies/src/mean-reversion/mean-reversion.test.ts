import { meanReversion } from './mean-reversion';

describe('meanReversion', () => {
  // Test case: Buy signal
  it('should return "Buy" when the opening price is significantly lower than the previous close', () => {
    const previousClose = 100;
    const currentOpen = 90;
    const thresholdPercent = 1; // 1% of previous close
    expect(meanReversion(previousClose, currentOpen, thresholdPercent)).toBe(
      'Buy'
    );
  });

  // Test case: Sell signal
  it('should return "Sell" when the opening price is significantly higher than the previous close', () => {
    const previousClose = 100;
    const currentOpen = 110;
    const thresholdPercent = 1; // 1% of previous close
    expect(meanReversion(previousClose, currentOpen, thresholdPercent)).toBe(
      'Sell'
    );
  });

  // Test case: Hold signal
  it('should return "Hold" when there is no significant deviation', () => {
    const previousClose = 100;
    const currentOpen = 101;
    const thresholdPercent = 1; // 1% of previous close
    expect(meanReversion(previousClose, currentOpen, thresholdPercent)).toBe(
      'Hold'
    );
  });
});
