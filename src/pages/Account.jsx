import React from 'react'
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
      <img className="sm:block absolute w-full h-[400px] object-cover " src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[10%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold '>My Shows</h1>

      </div>
      </div>
      <div className='absolute w-full top-[60%] p-4 pl-1 md:p-8'>

     <SavedShows/>
     
      </div>
    
      
    </>
  )
}

export default Account;
