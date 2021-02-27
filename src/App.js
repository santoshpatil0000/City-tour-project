import './App.scss';
import HeadingNav from './components/navabar/HeadingNav';
import React from 'react'
import TourList from './components/navabar/TourList'

function App() {
  return (
    <div>
      <React.Fragment>
     <HeadingNav/> 
     <TourList/>
     </React.Fragment>
     
    </div>
  );
}

export default App;
