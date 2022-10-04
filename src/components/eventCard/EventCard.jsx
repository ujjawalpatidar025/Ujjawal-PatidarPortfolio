import React ,{useState} from 'react'
import Ecard from './Ecard'
import './EventCard.css'

import image from './images/DP.jpeg'

const EventCard = () => {

        
    return (
        <>
        {/* <Heading text={"Events"} /> */}
        <div className="Event_head" id='profiles'>
            <h2>My <span>Profiles</span></h2>
            <p>Here is my profiles to represent my Achievements</p>
        </div>
        <div className="Event_card">
        <Ecard name='Codechef' content =' I am a 4 star rated coder on Codechef by attempting 600+ questions and 50+ contests' link='https://www.codechef.com/users/patidarujjawal'/>
        <Ecard name='Codeforces' content =' I am a Newbie coder on Codeforces by attempting 200+ questions and 50+ contests' link='https://codeforces.com/profile/patidarujjawal'/>
        <Ecard name='Geek for Geeks' content =' I am a DSA learner as i solved 98 problems on gfg and overall coding score is 214' link='https://auth.geeksforgeeks.org/user/ujjawalpatidarcs2020'/>
        <Ecard name='Leetcode' content =' I solved 91 problems on leetcode including various topics of data structures and algorithms' link='https://leetcode.com/patidarujjawal/'/>

    
        </div>
        </>
    )
}

export default EventCard
