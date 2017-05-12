import logger from '../logger';

describe('utils/logger', () => {
  it('should have debug property', () => {
    expect(logger).toHaveProperty('debug');
  });

  it('should have error property', () => {
    expect(logger).toHaveProperty('error');
  });

  it('should have info property', () => {
    expect(logger).toHaveProperty('info');
  });

  it('should have log property', () => {
    expect(logger).toHaveProperty('log');
  });
});
