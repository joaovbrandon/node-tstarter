import { describe, expect, test, vi } from 'vitest';

import { app } from '@/app';

describe('app', () => {
  test('should log node-tstarter', () => {
    const consoleLogSpy = vi.spyOn(console, 'log');

    app();

    expect(consoleLogSpy).toHaveBeenCalledWith('node-tstarter-test');
  });
});
