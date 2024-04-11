import {expect, it} from 'vitest';
import {bar} from './app';

it('should from cjs', () => {
  expect(bar).toBe('from cjs');
})
