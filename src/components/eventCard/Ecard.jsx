import React from 'react'
import DPimage from './images/DP.jpeg'
import './EventCard.css'
import video from './images/the-breathtaking-beauty-of-nature-hd.mp4'
// import HoverVideoPlayer from 'react-hover-video-player';
import EventCardImage from './EventCardImage.jsx';




const Ecard = (props) => {
    
    return (
        <div className='Event_card_main'>
         {/* <div className='Event_card_img'> */}
          {/* <HoverVideoPlayer
        videoSrc={video} 
        pausedOverlay={
          <img
            src='https://picsum.photos/246/140'
          />
        }
        /> */}
            {/* <EventCardImage/> */}

          {/* </div> */}
          {/* <div className="Event_card_date">
                August 6,2022
          </div> */}

          <div className="Event_card_title">
                {props.name}
          </div>
          <div className="Event_card_para">
          {props.content} 
          </div>

          <div className="Event_card_gallery_button">
             <a href={props.link} target='__blank'><button className="glow-on-hover">More</button> </a>
          </div>
       
       
   
            
          
        </div>
    )
}

export default Ecard
