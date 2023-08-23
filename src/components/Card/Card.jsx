import React from 'react'
import FrontLogo from '../../assets/dark-modyo.jpg';
import './Card.scss';

const Card = ({value, isAnimation, handleSelectCard}) => {
  return (
    <article className='memorize-card' onClick={() => (!value.isFlipped && !isAnimation) && handleSelectCard(value)}>
      <div className={`memorize-card-container ${(value.isFlipped) ? 'memorize-card-container-flipped': ''} `}>
        {
          value.isFlipped ? (
            <img alt='Animals' className='memorize-card-back' src={value.url}/>
            ) : (
            // <img alt='Animals' className='memorize-card-back' src={value.url}/>
            <img alt='Card Front' className='memorize-card-front' src={FrontLogo}/>
          )
        }
      </div>
    </article>
  )
};

export default Card;