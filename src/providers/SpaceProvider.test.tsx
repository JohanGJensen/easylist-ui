import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import SpaceProvider, { SpaceContext } from './SpaceProvider';
import { ISpace } from 'interfaces';

const testSpaces: ISpace[] = [
  {
    id: '1',
    name: 'space 1',
    items: [],
    user: 'user 1',
  },
];

const TestComponent = () => {
  const { data, handleSetAllSpaces, handleDeleteSpace } =
    React.useContext(SpaceContext);

  return (
    <div>
      <button onClick={() => handleSetAllSpaces(testSpaces)}>
        {'handleSetAllSpaces'}
      </button>
      <button onClick={() => handleDeleteSpace(testSpaces[0].id)}>
        {'handleDeleteSpace'}
      </button>
      {data?.map((space) => {
        return (
          <div data-testid={'id-name'} key={space.id}>
            <p>{space.name}</p>
            <p>{space.user}</p>
          </div>
        );
      })}
    </div>
  );
};

describe('<SpaceProvider />', () => {
  beforeEach(() => {
    render(
      <SpaceProvider data-testid={'id-provider'}>
        <TestComponent />
      </SpaceProvider>
    );

    const button = screen.getByText(/handleSetAllSpaces/);
    fireEvent.click(button);
  });

  it('has spaces loaded in component', () => {
    expect(screen.queryByTestId('id-provider')).toBeDefined();

    const name = screen.getByText(testSpaces[0].name);
    const user = screen.getByText(testSpaces[0].user);

    expect(name.textContent).toEqual(testSpaces[0].name);
    expect(user.textContent).toEqual(testSpaces[0].user);
  });

  it('handle delete space', () => {
    const button = screen.getByText(/handleDeleteSpace/);
    fireEvent.click(button);

    expect(testSpaces).toHaveLength(0);
  });
});
