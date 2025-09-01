// src/components/PlayerIcon.tsx
import React from 'react';

interface Player {
  id: string;
  team: 'offense' | 'defense';
  role: string;
  x: number;
  y: number;
}

interface Props {
  player: Player;
  cellSize: number;
}

export const PlayerIcon: React.FC<Props> = ({ player, cellSize }) => {
  const style: React.CSSProperties = {
    position: 'absolute',
    left: player.x * cellSize,
    top: player.y * cellSize,
    width: cellSize,
    height: cellSize,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: player.team === 'offense' ? '50%' : '0%',
    backgroundColor: player.team === 'offense' ? '#4caf50' : '#f44336',
    color: 'white',
    fontWeight: 'bold',
    border: '2px solid black',
    boxSizing: 'border-box',
    transition: 'all 0.5s ease',
  };

  return <div style={style}>{player.role}</div>;
};
