import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PlayGrid } from './PlayGrid';

const mockPlayers = [
  { id: 'QB', team: "offense" as const, role: 'QB', x: 4, y: 18 },
  { id: 'CB1', team: "defense" as const, role: 'CB', x: 1, y: 13 },
];

describe('PlayGrid', () => {
  it('renders player roles on the grid', () => {
    render(<PlayGrid players={mockPlayers} />);

    // Check that roles appear in the DOM
    expect(screen.getByText('QB')).toBeInTheDocument();
    expect(screen.getByText('CB')).toBeInTheDocument();
  });

  it('renders the correct number of players', () => {
    render(<PlayGrid players={mockPlayers} />);
    const playerElements = screen.getAllByText(/QB|CB/);
    expect(playerElements).toHaveLength(2);
  });
});
