import reviews from '../../helpers/data';
import { useState } from 'react';
import React from 'react'
import ReviewCard from '../ReviewCard/ReviewCard';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(reviews[index])
  

  const handleInc = () => {
    let newIndex = 0;
    if(index===3){
      setIndex(0)
      setData(reviews[0]);
    }else{
      newIndex =index+1
      setIndex(newIndex)
      setData(reviews[newIndex]);
    }
  };

   const handleDec = () => {
    let newIndex = 0;
    if(index===0){
      setIndex(3)
      setData(reviews[3]);
    }else{
      newIndex = index-1
      setIndex(newIndex)
      setData(reviews[newIndex]);
    }
   };

   const handleRandom = () => {
    let randomNum = Math.floor(Math.random() * reviews.length);
    randomNum === index && randomNum++
    if(randomNum>3){
      randomNum = Math.floor(Math.random() * reviews.length);
    }
    setIndex(randomNum)
    setData(reviews[randomNum])

   }

  
  return (
    <div className='mt-4 m-auto main p-2'>
      <ReviewCard data={data} />

      <div className='text-center'>
        <div className='arrows'>
          <button className='previous border-0 fs-2 p-1 bg-white text-success' onClick={handleDec}>
            <FaArrowCircleLeft />
          </button>
          <button className='next border-0 fs-2 p-1 bg-white text-success' onClick={handleInc}>
            <FaArrowCircleRight />
          </button>
        </div>

        <div className='m-2'>
          <button
            className='surprise p-1 border-0  rounded-3'
            onClick={handleRandom}
          >
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;