import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { useProgressPercentage } from './useProgressPercentage';
import { ISpace } from 'interfaces';

const space: ISpace = {
  id: '1',
  name: 'general store',
  user: 'john',
  items: [
    {
      id: '1',
      complete: true,
      name: 'sauce',
    },
    {
      id: '2',
      complete: false,
      name: 'pasta',
    },
    {
      id: '3',
      complete: false,
      name: 'pineapple',
    },
  ],
};

describe('useProgressPercentage hook', () => {
  const TOTAL_COMPLETED = space.items.length;

  it('should match 33 percentage', () => {
    const { result } = renderHook(() => useProgressPercentage(space));

    expect(result.current).toBe((1 / TOTAL_COMPLETED) * 100);
  });

  it('should match 100 percentage', () => {
    // adjust all items to be completed
    space.items[0].complete = true;
    space.items[1].complete = true;
    space.items[2].complete = true;

    const { result } = renderHook(() => useProgressPercentage(space));

    expect(result.current).toBe((3 / TOTAL_COMPLETED) * 100);
  });
});
