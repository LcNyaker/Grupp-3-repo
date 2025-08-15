import React from 'react';
import './Footer.scss'
import pawImage from '../../assets/paw.png'

const Footer: React.FC = () => {
  return (
    <footer>
      <img src={pawImage} alt="ett tassavtrck" />
      <div className='contact'>
        <p>Telefon: 070xxxxxxx</p>
        <p>support@purrfection.se</p>
        <p>Kattlådan 10, 666 22, Kattegatt</p>
      </div>
    </footer>
  );
};

export default Footer;