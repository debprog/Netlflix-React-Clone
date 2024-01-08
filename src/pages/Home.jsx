import React from 'react'
import Main from '../components/Main';
import Rows from '../components/Rows';
import requests from '../Request';

const Home = () => {
  return (
    <div>
      <Main/>
      <Rows rowID='1' title='Popular' fetchURL={requests.requestPopular}/>
      <Rows rowID='2' title='Up Coming Movies' fetchURL={requests.requestUpcoming}/>
      <Rows rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
      <Rows rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Rows rowID='5' title='Horror' fetchURL={requests.requestHorror}/>



    </div>
  )
}

export default Home;
