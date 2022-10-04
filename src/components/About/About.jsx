import "./About.css";
import Award from './images1/ujjawal2.jpg';

const About = () => {
    return (
        
        <div className="a" id='about'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={Award}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <hr></hr>
                {/* <p className="a-sub">
                    It is a long established fact that a reader will be distracted by the
                    readable content.
        </p> */}
                <p className="a-desc">
                    You are exploring the portfolio of Ujjawal Patidar, a Third year undergraduate from IIST Indore, with Computer Science as major. I am a passionate geek, an aspiring web developer and a beginner to the vast world of Competitive Programming. I love my work completed before deadlines but loves to make sketches in my free time.

                    I am 4 *(stars) and 1859 rating at codechef(patidarujjawal) and Newbie on Codeforces with max-rating of (1100+).
                    <br></br>
                    <br></br>
                    Thank You for visiting ! please feel free to explore the site to know more or I love if you contact me.
        </p>

            </div>
            
        </div>
      
    );
};

export default About;