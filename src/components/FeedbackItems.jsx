import React from 'react'
import Card from './Card'
import { AiOutlineDelete } from 'react-icons/ai';

const FeedbackItems = ({item ,handleDelete}) => {




  return (
     <Card /*darkMode*/ >
        <div className="num-display">{item.rating}</div>
        <button onClick={()=> handleDelete (item.id)} className='close'>
        <AiOutlineDelete  color ="red" size={30}/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItems