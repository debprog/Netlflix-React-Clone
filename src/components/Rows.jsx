import React, { useEffect, useState } from 'react';
import   {FaHeart,FaRegHeart} from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';

import Main from './Main';

import {MdChevronLeft,MdChevronRight} from 'react-icons/md';
import Movie from './Movie';

const Rows = ({ title, fetchURL,rowID }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

//******************************************* */



  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        // Handle the error here, e.g., log it or show a user-friendly message
        console.error('Error fetching data:', error);
        // Optionally, set an error state or display an error message to the user
      }
    };

    fetchData();
  }, [fetchURL]);



   const slideLeft=() => {

     let slider=document.getElementById('slider'+rowID)
     slider.scrollLeft=slider.scrollLeft-500;
    }


   const slideRight=() => {

     let slider=document.getElementById('slider'+rowID)
     slider.scrollLeft=slider.scrollLeft+500;
    
  }
  

  
 

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className="relative flex items-center group ">

      <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />

        <div id={'slider'+ rowID} 
        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => (
           <Movie key={id} item={item}/>
          ))}
        </div>

        
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        </div>
    </>
  );
};

export default Rows;
