import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import emailjs from 'emailjs-com'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone'

import './Contact.css'

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_n9rs9ac', e.target, '8AumkYNMmm_iLQLru')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return (
        <div class="contact_container" id="contact">
      {/* <span class="big-circle"></span> */}
      <img src="img/shape.png" class="square" alt="" ></img>
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            
          </p>

          <div class="info">
            <div class="information">
              <LocationOnIcon className='ConIcon'/>
              <p>21, Ashish nagar, Kelod kartal , Khandwa road, Indore (452020)</p>
            </div>
            <div class="information">
              <EmailIcon className='ConIcon'/>
              <p>ujjawalpatidar025@gmail.com</p>
            </div>
            <div class="information">
              <PhoneIcon className='ConIcon'/>
              <p>+917987210447</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="https://www.facebook.com/ujjawal.patidar.750" target='__blank'>
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://mobile.twitter.com/Ujjawal90323766" target='__blank'>
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/its_u_jjawal/" target='__blank'>
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://in.linkedin.com/in/ujjawal-patidar-81091b206?trk=people-guest_people_search-card" target='__blank'>
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="http://wa.me/+917987210447" target='__blank'>
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off" onSubmit={sendEmail}>
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" placeholder='Name' ></input>
              
              
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" placeholder='E-mail' ></input>
              
            </div>
            <div class="input-container">
              <input type="tel" name="mobile" class="input" placeholder='Mobile No.' ></input>
              
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" placeholder='Message'></textarea>
              
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
      <h4>Copyright @Ujjawal Patidar , 2022</h4>
    </div>

    )
}

export default Contact
