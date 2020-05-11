import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <div className='intro'>
            <p className='intro-top'>My Name is,</p>
            <h1>
                <div className='highlight'>
                    Christian
                </div>
                <br/>
                <div  className='highlight'>
                    Augustyn
                </div>
            </h1>
            <p className='intro-bottom'>Web Developer | Toronto, ON</p>
        </div>
    );
}

export default Intro;