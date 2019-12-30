import React from 'react';
import './homepage.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import sample from '../../Utils/video.mp4'

const homepage = () => {
    return (
        <div className="banner-start">
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <div className="box2">
                <div className="box-name">
                    <Fade left>
                        Hi I'M Kanishk Goel
                    </Fade>
                </div>
                <div>
                    <Fade right delay={500}>
                        Front-end Developer | Back-end Developer
                    </Fade>
                </div>
            </div>
            <div className="box">
                <div >
                    <p><Zoom delay={700}>Love to learn new skills and make 100% efforts to put that on screen</Zoom></p>
                    <p><Zoom delay={1200}>Want to work in new task which not only upskill me but also benefits others</Zoom></p>
                </div>
            </div>
        </div>
    )
}

export default homepage;