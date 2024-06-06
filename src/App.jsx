import React, { useState, useEffect } from 'react'
import Counter from './components/Counter'
import GameOver from './components/GameOver'

const App = () => {
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    console.log('rendered')
    return () => {
      console.log('cleaned up')
    }
  })
  
  const finishGame = () => {
    setIsGameOver(true)
  }
  

  return (
    <div style={styles.container}>
      {isGameOver ?
        <GameOver /> : <Counter finishGame={finishGame} />
      }
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '30px,',
  },
}

export default App