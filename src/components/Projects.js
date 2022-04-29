import React from 'react';
import '../styles/Projects.css';
import twitchviewerss from '../assets/twitchviewerss.png'
import tftrandomizerss from '../assets/tftrandomizerss.png'
import contributioncalcss from '../assets/contributioncalcss.png'
import recipeappss from '../assets/recipeappss.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'

const Projects = () => {
    return (
        <div className='projectsdiv container' id='projects'>
            <div><h1 className='heading'>Projects</h1></div>
            <div className='project'>
                <div className='project_image borderleft'>
                    <a href='https://twitch-viewer.netlify.app/' target='_blank' rel='noreferrer'>
                        <img src={twitchviewerss} alt='Twitch Viewer' className='siteimage' />
                    </a>
                </div>
                <div className='project_info'>
                    <div className='description'>
                        <h2>Twitch Viewer</h2>
                        <p>This app is a third-party site that lets users watch as many Twitch broadcasts they want. It includes an
                            auto-join chat feature, and a carousel component to organize multiple broadcasts. This project was practice
                            for integrating OAuth Authorization Code flow and how to handle dynamic API.
                        </p>
                        <div className='skillsrow'>
                            <img className='skill' src={html} alt='html' />
                            <img className='skill' src={css} alt='css' />
                            <img className='skill' src={javascript} alt='javascript' />
                            <img className='skill' src={react} alt='react' />
                            <img className='skill' src={redux} alt='redux' />
                        </div>
                    </div>
                    <div className='project_links'>
                        <a className='demo linkbutton' href='https://twitch-viewer.netlify.app/' target='_blank' rel='noreferrer'>
                            Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a className='source linkbutton' href='https://github.com/martinchmui/twitch-viewer' target='_blank' rel='noreferrer'>
                            <i class="fa-brands fa-github"></i> View Source
                        </a>
                    </div>
                </div>
            </div>
            <div className='project right'>
                <div className='project_image borderright'>
                    <a href='https://martinchmui.github.io/tft-randomizer/' target='_blank' rel='noreferrer'>
                        <img src={tftrandomizerss} alt='TTF Randomizer' className='siteimage' />
                    </a>
                </div>
                <div className='project_info'>
                    <div className='description'>
                        <h2>TFT Randomizer</h2>
                        <p>An app that allows the user to randomly choose their cosmetic skins in Teamfight Tactics, a feature not
                            available in the League of Legends Client. The main purpose of this project was to help me familiarize
                            how to manipulate JSON data and display it in the DOM.
                        </p>
                        <div className='skillsrow'>
                            <img className='skill' src={html} alt='html' />
                            <img className='skill' src={css} alt='css' />
                            <img className='skill' src={javascript} alt='javascript' />
                            <img className='skill' src={react} alt='react' />
                            <img className='skill' src={redux} alt='redux' />
                        </div>
                    </div>
                    <div className='project_links'>
                        <a className='demo linkbutton' href='https://martinchmui.github.io/tft-randomizer/' target='_blank' rel='noreferrer'>
                            Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a className='source linkbutton' href='https://github.com/martinchmui/tft-randomizer' target='_blank' rel='noreferrer'>
                            <i class="fa-brands fa-github"></i> View Source
                        </a>
                    </div>
                </div>
            </div>
            <div className='project'>
                <div className='project_image borderleft'>
                    <a href='https://martinchmui.github.io/contribution-calculator/' target='_blank' rel='noreferrer'>
                        <img src={contributioncalcss} alt='Twitch Viewer' className='siteimage' />
                    </a>
                </div>
                <div className='project_info'>
                    <div className='description'>
                        <h2>Contribution Calculator</h2>
                        <p>A calculator for determining how much of an asset a user should buy based on their target asset allocations.
                            Project's purpose was to learn how form submissions work in a React App.
                        </p>
                        <div className='skillsrow'>
                            <img className='skill' src={html} alt='html' />
                            <img className='skill' src={javascript} alt='javascript' />
                            <img className='skill' src={react} alt='react' />
                            <img className='skill' src={redux} alt='redux' />
                        </div>

                    </div>
                    <div className='project_links'>
                        <a className='demo linkbutton' href='https://martinchmui.github.io/contribution-calculator/' target='_blank' rel='noreferrer'>
                            Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a className='source linkbutton' href='https://github.com/martinchmui/contribution-calculator' target='_blank' rel='noreferrer'>
                            <i class="fa-brands fa-github"></i> View Source
                        </a>
                    </div>
                </div>
            </div>
            <div className='project right'>
                <div className='project_image borderright'>
                    <a href='https://mui-recipeapp.netlify.app/' target='_blank' rel='noreferrer'>
                        <img src={recipeappss} alt='Recipe App' className='siteimage' />
                    </a>
                </div>
                <div className='project_info'>
                    <div className='description'>
                        <h2>Recipe App</h2>
                        <p>This app allows a user to store their favourite recipes and whether if they have the ingredients needed.
                            This project was made entirely from JavaScript and provides practice into CRUD operations.
                        </p>
                        <div className='skillsrow'>
                            <img className='skill' src={html} alt='html' />
                            <img className='skill' src={javascript} alt='javascript' />
                        </div>

                    </div>
                    <div className='project_links'>
                        <a className='demo linkbutton' href='https://mui-recipeapp.netlify.app/' target='_blank' rel='noreferrer'>
                            Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a className='source linkbutton' href='https://github.com/martinchmui/recipe-app' target='_blank' rel='noreferrer'>
                            <i class="fa-brands fa-github"></i> View Source
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;