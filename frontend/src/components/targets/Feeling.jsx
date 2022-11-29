import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Deslice from 'react-tinder-card'
import { string } from 'yup'

const Feeling = () => {
  const [emociones, setEmociones] = useState([
  { id: 1, feel: 'ira' },
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
     <div className=" flex justify-center items-center w-full h-full bg-[b] relative rounded z-[0]">
    <div className=' absolute z-[2] ' >
      {
        emociones.map(feel => (
          <Deslice
          className="z-10"
          key={feel.id}
          preventSwipe={['up', 'down']}
          onCardLeftScreen={() => onCardLeftScreen('foobar')} 
          onSwipe={onSwipe}
          >
   <div className={`bg-[#F4717F]  border-[1px] shadow-228b absolute rounded bottom-[0]  translate-y-[50%] left-0 translate-x-[-50%] w-[clamp(100px,70vw,300px)]  h-[clamp(200px,100vw,300px)] flex uppercase justify-center items-center text-lg rotate-[${5*feel.id}deg]  hover:drop-shadow-lg shadow-black  z-[2] sm:h-[clamp(200px,100vw,300px)] sm:w-[clamp(100px,50vw,300px)]`}>
  {console.log(5*feel.id)}
            <h2 className='hover:cursor-pointer  text-[clamp(1rem,7vw,3rem)]'>{feel.feel}</h2>
          </div>
          </Deslice> 
        ))
      }
       

    </div>
      <button className='hover:cursor-pointer rounded-[10px] p-4  absolute z-[1]' > <Link to="/beforeStart"> ▶ </Link>  </button>
      </div>
  )
}

export default Feeling
