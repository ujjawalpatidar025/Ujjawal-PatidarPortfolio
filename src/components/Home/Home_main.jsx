import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import About from '../About/About.jsx'
import Me from './images/IIST Indore (4).png'
import './Home.css'

const Home_main = () => {
    return (
        <div>
           

            {/* <About /> */}
            <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">Hi there!</h2>
                        <h1 className="i-name"><span>Ujjawal</span> Patidar</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">ICPC Regionalist</div>
                                <div className="i-title-item">Web Developer</div>
                                <div className="i-title-item">CP Learner</div>
                                <div className="i-title-item">DSA Learner</div>
                                <div className="i-title-item">React Developer</div>
                                
                            </div>
                        </div>
                        <p className="i-desc">
                       Keep Coding , Keep Exploring , Keep Innovative....
          </p>
          <a href='https://drive.google.com/file/d/1YW-qA9nfa-bXOcO16MDfRLwj2ymz0vsJ/view?usp=sharing' target='_blank'><button className='btn_shadow' >Get Resume</button></a>
                    </div>
                    
                   
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    <img src={Me} alt="" className="i-img" />
                </div>
            </div>


        </div>
    )
}

export default Home_main
