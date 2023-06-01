import { hey } from '../src/index';

import { describe, expect, it } from 'vitest';

describe('hey', () => {
  it('should return "Hello World!"', () => {
    expect(hey()).toBe('Hello World!');
  });
});
