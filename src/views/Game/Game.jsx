import React, { useEffect, useState } from 'react';
import Logo from '../../assets/light-modyo.png'
import Board from '../../components/Board/Board';
import confetti from 'canvas-confetti';
import './Game.scss';
import { useAppSelector } from '../../hooks/store';
import { usePlayerActions } from '../../hooks/usePlayerActions';

const Game = () => {
  const player = useAppSelector((state) => state.players)
  const { changedBoard } = usePlayerActions();

  const [data, setData] = useState([]);
  const [randomData, setRandomData ] = useState(player.board);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=2`
      ).then(response => response.json());
  
      const animals = response.entries.map((img, idx) => {
        const newObject = {
          id: img.fields.image.uuid,
          isFlipped: false,
          url: img.fields.image.url
        }

        return newObject;
      })

      setData(animals);
    }
    getData()
  }, []);

  useEffect(() => {
    const newRandom = [...shuffle(data), ...shuffle(data)];
    newRandom.length && setRandomData(newRandom.map((nr, idx) => {return {...nr, index: idx}}));
  }, [data]);
  

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };

  const handleSelectCard = (card) => {
    const flippedCard = {...card, isFlipped: true};
    const updateData = [...randomData];
    
    updateData.splice(card.index, 1, flippedCard);
    setRandomData(updateData);
    if(selectedCard === null) {
      setSelectedCard(card);
    } else if(selectedCard.id === card.id) {
      setSelectedCard(null);
    } else {
      setIsAnimation(true);
      setTimeout(() => {
        updateData.splice(card.index, 1, card);
        updateData.splice(selectedCard.index, 1, selectedCard);
        setRandomData(updateData); 
        setSelectedCard(null);
        setIsAnimation(false);
      }, 1000);
    }    
    const existsCardDown = updateData.filter((data) => data.isFlipped === false);
    (existsCardDown.length === 0) && confetti();
  };

  return (
    <article className='memorize-game'>
      <header className='memorize-game-header'>
        <img alt="Modyo" className='momerize-game-img' src={Logo} />
        <h3 className='momerize-game-h3'>Memorize for</h3>
      </header>
      <main className='memorize-game-main'>
        <Board cards={randomData} isAnimation={isAnimation} handleSelectCard={handleSelectCard} />
      </main>
    </article>
  )
}

export default Game;