import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

const Left = () => {
  return <div id={'left-id'}>hello left</div>;
};

// const Right = () => {
//   return <div>hello right</div>;
// };

describe('Header component', () => {
  beforeEach(() => {
    render(<Header leftContent={<Left />} />);
  });

  test('should display left content', () => {
    expect(screen.getByText(/hello left/i)).toBeUnDefined();
  });
});
