import React, { useEffect, useState } from 'react'
import { Input } from '@chakra-ui/react'
import { useAppSelector } from '../../hooks/store' 
import { usePlayerActions } from '../../hooks/usePlayerActions'

import Game from '../Game/Game'

import './Home.scss'

const Home = () => {
  const player = useAppSelector((state) => state.players)
  const { changedPlayerName } = usePlayerActions();

  const [isReady, setIsReady] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(player.name);
  }, [player.name])
  
  const handleClick = () => {
    (player.name !== '') && setIsReady(true);
  };
  
  return (
    <>
      {
        (!isReady) ? (
          <article className='memorize-home'>
            <header className='memorize-home-header'>
              <h1 className='memorize-home-h1'>Memorize for</h1>
              <img src="https://cloud.modyocdn.com/uploads/3e33d46c-1555-4f58-a218-6f2b5d80b4cd/original/modyo.svg" alt="Modyo" />
            </header>
            <main className='memorize-home-main'>
              <Input placeholder='Player Name' size='md' width='90%' focusBorderColor="#3DB66A" errorBorderColor='red.300' 
                      onChange={changedPlayerName} value={name} isInvalid={isReady}
              />
              <button className='memorize-home-button' onClick={handleClick}>Start</button>
            </main>
          </article>
        ) :
          <Game />
      }
    </>
  )
}

export default Home;