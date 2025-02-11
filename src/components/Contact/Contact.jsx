import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';
import { SvgIcon } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
  return (
    <Element id='contact'>
      <div className='contactContainer'>
        <h1 className='contact__title'>CONTACT</h1>
        <div className='contact__content'>
          <div className='contact__details'>
            <p>
              Email : <span>judesamuelsjj@gmail.com</span>
            </p>
            <p>
              Phone : <span> +91 6382989022</span>
            </p>
            <p>
              Github Username : <span>@judesamuelsj</span>
            </p>
          </div>
          <div className='contact__icons'>
            <SvgIcon>
              <a href='www.google.com'>
                <FacebookIcon />
              </a>
            </SvgIcon>
            <SvgIcon>
              <a href='www.google.com'>
                <LinkedInIcon />
              </a>
            </SvgIcon>
            <SvgIcon>
              <a href='www.google.com'>
                <InstagramIcon />
              </a>
            </SvgIcon>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
