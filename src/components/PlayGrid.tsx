// src/components/PlayGrid.tsx
import React from 'react';
import { PlayerIcon } from './PlayerIcon';

interface Player {
  id: string;
  team: 'offense' | 'defense';
  role: string;
  x: number;
  y: number;
}

interface PlayGridProps {
  players: Player[];
}

export const PlayGrid: React.FC<PlayGridProps> = ({ players }) => {
  const rows = 20;
  const cols = 10;
  const cellSize = 40;

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    position: 'relative',
    width: cols * cellSize,
    height: rows * cellSize,
    border: '2px solid black',
    backgroundColor: '#e0f7fa',
  };

  return (
    <div style={gridStyle}>
      {players.map((player) => (
        <PlayerIcon key={player.id} player={player} cellSize={cellSize} />
      ))}
    </div>
  );
};
