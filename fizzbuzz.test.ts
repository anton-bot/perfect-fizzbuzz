import { getFizzbuzzResult } from './fizzbuzz';

describe('Functional Fizzbuzz', () => {
  it('must print Fizz or Buzz for numbers divisible by 3 or 5', () => {
    expect(getFizzbuzzResult(2)).toBe('2');
    expect(getFizzbuzzResult(11)).toBe('11');
    expect(getFizzbuzzResult(92)).toBe('92');
  });

  it('must return regular numbers', () => {
    expect(getFizzbuzzResult(30)).toBe('FizzBuzz');
    expect(getFizzbuzzResult(9)).toBe('Fizz');
    expect(getFizzbuzzResult(20)).toBe('Buzz');
  });
});
