import React from 'react'
import GameLibraryEntry from '../game-library-entry/GameLibraryEntry'

const GameLibraryDisplay = () => {
  return (
    <div className="LibraryMainDisplay">
      <GameLibraryEntry
        title="Necromancy"
        description="There's a necromancer at your school, take out his neverending legion of undead warriors! Arrow keys to aim, spacebar to shoot."
        splashLink="https://i.imgur.com/zVWUoOV.png"
        gameLink="http://localhost:8000/public/necromancy"
      />
      <GameLibraryEntry
        title="Space Commander"
        description="Escape from the unrelenting alien fleet! Arrow keys to move, spacebar to shoot."
        splashLink="https://i.imgur.com/z8qipfA.png"
        gameLink="http://localhost:8000/public/platy"
      />
      <GameLibraryEntry
        title="Bong"
        description="Bong => Bad Pong. You never win. Don't even try. Up/Down to move."
        splashLink="https://i.imgur.com/a1CxN0t.png"
        gameLink="http://localhost:8000/public/bong"
      />
    </div>
  )
}

export default GameLibraryDisplay
