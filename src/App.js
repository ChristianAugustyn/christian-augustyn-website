import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Intro from './components/intro/Intro';
import Blob from './components/blob/Blob';
import ulb_blob from './images/blob-images/upper-left/upper-left-blob-bottom.svg';
import ult_blob from './images/blob-images/upper-left/upper-left-top-blob.svg';
import urb_blob from './images/blob-images/upper-right/upper-right-blob-bottom.svg';
import urt_blob from './images/blob-images/upper-right/upper-right-blob-top.svg';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className='container-center'>
        <Intro />
      </div>
      <Blob
        img_top={ult_blob}
        img_bot={ulb_blob}
        top_img_x='-10px'
        top_img_y='130px'
        top='8%'
        left='-8%'
      />
      <Blob
        img_top={urt_blob}
        img_bot={urb_blob}
        top_img_x='50px'
        top_img_y='-30px'
        top='5%'
        right='-65%'
      />
    </div>
  );
}

export default App;
