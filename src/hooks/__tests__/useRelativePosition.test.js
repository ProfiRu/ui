// yarn test src/client/hooks/__tests__/useRelativePosition.js
import {act, renderHook} from '@testing-library/react-hooks';
import useRelativePosition from '../useRelativePosition';

jest.unmock('../useRelativePosition');
jest.useRealTimers();

describe('useRelativePosition', () => {
  let element;
  let expectedResult;
  beforeEach(() => {
    element = {
      getBoundingClientRect: jest.fn(() => ({
        top: 20,
        height: 40,
        left: 50,
        width: 70,
      })),
    };
  });

  it('should be defined', () => {
    expect(useRelativePosition).toBeDefined();
  });

  it('should return undefined when element is undefined', () => {
    let hook = renderHook(() => useRelativePosition());
    expect(hook.result.current[0]).toEqual({display: 'none'});
  });

  it('should use getBoundingClientRect to calculate styles', async () => {
    const hook = renderHook(() => useRelativePosition(element));
    expect(hook.result.current).toMatchSnapshot();
  });
});
