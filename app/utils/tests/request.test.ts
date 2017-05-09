jest.mock('../request');

import { get, post } from '../http';

describe('utils/http', () => {
  it('should handle get method', async () => {
    const data = await get('/', {});
    expect(data).toEqual('Hello');
  });
});
