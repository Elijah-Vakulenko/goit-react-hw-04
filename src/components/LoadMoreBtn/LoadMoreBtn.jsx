import React from 'react'
import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => {
  return (
     <button onClick={onClick} type="button" className={s.button}>
        Load more
      </button>
  )
}

export default LoadMoreBtn