import React from 'react'

const Skills_main1 = ( props) => {
    return (
        <div className="skill_bar">
                <div className="info">
                    <p>{props.skill}</p>
                    <p>{props.percent}</p>
                </div>
                <div className="bar">
                    <span className="html"></span>
                </div>
            </div>
    )
}

export default Skills_main1
