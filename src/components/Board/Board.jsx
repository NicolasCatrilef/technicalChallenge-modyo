import React from 'react'
import Card from '../Card/Card'

import './Board.scss'

const Board = ({cards, isAnimation, handleSelectCard}) => {
  return (
    <article className='memorize-board'>
      {
        cards.map((card, idx) => {
          return (
            <Card key={card.index} value={card} isAnimation={isAnimation}
                  handleSelectCard={handleSelectCard} 
            />
          )
        })
      }
    </article>
  )
}

export default Board