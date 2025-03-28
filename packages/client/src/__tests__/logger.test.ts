import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';
import { Logger, LogLevel } from '../logger';

describe('logger', () => {
  let consoleSpies: { [key: string]: ReturnType<typeof vi.spyOn> };

  beforeEach(() => {
    consoleSpies = {
      debug: vi.spyOn(console, 'debug').mockImplementation(() => {}),
      info: vi.spyOn(console, 'info').mockImplementation(() => {}),
      warn: vi.spyOn(console, 'warn').mockImplementation(() => {}),
      error: vi.spyOn(console, 'error').mockImplementation(() => {})
    };
  });

  afterEach(() => {
    Object.values(consoleSpies).forEach(spy => spy.mockRestore());
  });

  it('should log messages at appropriate levels', () => {
    const logLevels = [
      { level: LogLevel.DEBUG, method: 'debug', message: 'DEBUG: This is a debug message' },
      { level: LogLevel.INFO, method: 'info', message: 'INFO: This is an info message' },
      { level: LogLevel.WARN, method: 'warn', message: 'WARN: This is a warning message' },
      { level: LogLevel.ERROR, method: 'error', message: 'ERROR: This is an error message' }
    ];

    logLevels.forEach(({ level, method, message }) => {
      const log = new Logger(level);
      log[method](message.split(': ')[1]);
      expect(consoleSpies[method]).toHaveBeenCalledWith(message);
    });
  });
});