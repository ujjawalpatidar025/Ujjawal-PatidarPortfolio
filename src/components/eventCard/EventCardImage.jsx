import React ,{ useState ,useEffect} from 'react'
import video from './images/the-breathtaking-beauty-of-nature-hd.mp4'
import DPimage from './images/DP.jpeg'

const EventCardImage = () => {

    const [showVideo, setshowVideo] = useState(false);
    const handleHoveringEnter = ()=>{
        setTimeout(()=>{
            setshowVideo(true);
        },100);
    }

    const handleHoveringLeave =()=>{
        setTimeout(()=>{
            setshowVideo(false);
        },100);
    }
    
    return (
    
        // <video src='https://picsum.photos/246/140' infinite='true' loop='true' autoPlay muted/>
        <div className='EventCardImage' onMouseEnter={handleHoveringEnter} onMouseLeave={handleHoveringLeave} >
            {showVideo?<video src={video} infinite='true' loop='true' autoPlay muted/>:<img src='https://picsum.photos/246/140'/>}
        </div>
        
    )
}

export default EventCardImage
