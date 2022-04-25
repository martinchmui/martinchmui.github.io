import React from 'react';
import '../styles/LandingPage.css';
import github from '../assets/GitHub-Mark-120px-plus.png'
import resume from '../assets/MARTIN_MUI_resume.pdf'
import resumelogo from '../assets/resume.png'

const LandingPage = () => {
    return (
        <div className='landingdiv'>
            <div className='background'>
            </div>
            <div className='header top'>Hello, I'm <span>Martin</span></div>
            <div className='header bot'>I'm a front end web developer</div>
            <div className='header'>
                <a href='https://github.com/martinchmui' target='_blank' rel='noreferrer'>
                    <img className='logo' src={github} alt='To Github' title='To Github'/>
                </a>
                <a href={resume} target='_blank' rel='noreferrer'>
                    <img className='logo' src={resumelogo} alt='Resume' title='Resume'/>
                </a>
            </div>
        </div>
    );
};

export default LandingPage;