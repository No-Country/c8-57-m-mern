import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Deslice from 'react-tinder-card'

const Feeling = () => {
  const [emociones, setEmociones] = useState([{ id: 1, feel: 'ira' },
  { id: 2, feel: 'enojo' },
  { id: 3, feel: 'ansiedad' },
])

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}
const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}
  return (
    <div className=" flex justify-center items-center w-[200px] h-[200px] relative rounded">
      <Link to="/beforeStart">
      <button className='hover:cursor-pointer rounded-[10px] p-4 hover:bg-slate-600'> >> </button>
      </Link>
      {
        emociones.map(feel => (
          <Deslice
          className={``}
          key={feel.id}
          preventSwipe={['up', 'down']}
          onCardLeftScreen={() => onCardLeftScreen('foobar')} 
          onSwipe={onSwipe}
          >
   <div className={`bg-[#F4717F]  border-[1px] shadow-228b absolute rounded left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] w-[150px]  h-[150px] flex uppercase justify-center items-center text-lg rotate-[${5*feel.id}deg]  hover:drop-shadow-lg shadow-black  `}>
  
            <h2 className='hover:cursor-pointer'>{feel.feel}</h2>
          </div>
          </Deslice> 
        ))
      }
    </div>
  )
}

export default Feeling