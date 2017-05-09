import logger from '../logger';

describe('utils/logger', () => {
  it('should handle debug log', () => {
    logger.debug('debug');
    expect(logger).toHaveProperty('debug');
  });

  it('should handle error log', () => {
    logger.error('error');
    expect(logger).toHaveProperty('error');
  });

  it('should handle info log', () => {
    logger.info('info');
    expect(logger).toHaveProperty('info');
  });

  it('should handle log', () => {
    logger.log('log');
    expect(logger).toHaveProperty('log');
  });
});
