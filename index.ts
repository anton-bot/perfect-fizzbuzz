import { getFizzbuzzResult } from './fizzbuzz';

const START_FROM = 1;
const ITERATIONS = 100;

Array.from({ length: ITERATIONS }, printFizzbuzz);

function printFizzbuzz(_: unknown, i: number): void {
  console.log(getFizzbuzzResult(i + START_FROM));
}
