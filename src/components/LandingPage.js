import React from 'react';
import '../styles/LandingPage.css';
import github from '../assets/GitHub-Mark-120px-plus.png'
import resumelogo from '../assets/resume.png'

const LandingPage = () => {
    return (
        <div className='landingdiv container' id='home'>
            <div className='background-container'>
                <div className='background'></div>
            </div>
            <div className='header top'>Hello, I'm <span className='name'>Martin</span></div>
            <div className='header bot'>I'm a front end web developer</div>
            <div className='header icon'>
                <div className='icon-container'>
                    <a href='https://github.com/martinchmui' target='_blank' rel='noreferrer'>
                        <img className='logo' src={github} alt='To Github' title='To Github' />
                        <figcaption>Github</figcaption>
                    </a>
                </div>
                <div className='icon-container'>
                    <a href='https://drive.google.com/file/d/1lhR6tZBzNb6MwIxT3srYQ5RgzJkpSlrg/view' target='_blank' rel='noreferrer'>
                        <img className='logo' src={resumelogo} alt='Resume' title='Resume' />
                        <figcaption>Resume</figcaption>
                    </a>
                </div>
            </div>
            <div className='projectslinkcontainer'>
                <a href='#projects' id='projectslink'>
                    View Projects <i class="fa-solid fa-arrow-down"></i>
                </a>
            </div>
        </div>
    );
};

export default LandingPage;