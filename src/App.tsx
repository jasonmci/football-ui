import { useEffect, useState } from 'react';
import { PlayGrid } from './components/PlayGrid';
import './App.css';

type Team = 'offense' | 'defense';
interface Player {
  id: string;
  team: Team;
  role: string;
  x: number;
  y: number;
}

interface PlayData {
  name: string;
  frames: Player[][];
}

export default function App() {
  const [play, setPlay] = useState<PlayData | null>(null);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    fetch('/api/plays/current')
      .then(r => r.json())
      .then(setPlay);
  }, []);

  useEffect(() => {
    if (!play) return;
    const t = setInterval(() => {
      setFrameIndex(i => (i + 1) % play.frames.length);
    }, 1000);
    return () => clearInterval(t);
  }, [play]);

  if (!play) return <div>Loading play…</div>;
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{play.name}</h1>
      <PlayGrid players={play.frames[frameIndex]} />
    </div>
  );
}
