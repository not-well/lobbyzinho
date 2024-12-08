'use client';

import Application from '@/components/Application';
import PlayerProvider from '@/context/playerContext';

export default function HomePage() {
  return (
    <>
      <PlayerProvider>
        <Application></Application>
      </PlayerProvider>
    </>
  );
}
