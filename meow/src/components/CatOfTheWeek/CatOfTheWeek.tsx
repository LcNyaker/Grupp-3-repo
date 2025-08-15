import React from 'react';
import kjellImage from '../../assets/kjell.jpg';
import './CatOfTheWeek.scss'

const CatOfTheWeek: React.FC = () => {
  return (
    <>
    <section className='cat-of-the-week'>
      <h3>Veckans hetaste kissemiss</h3>
      <div className='container'>
        <img src={kjellImage} alt="En brun katt som står på ett handfat" />
        <p className='cat-name'>Kjell</p>
        <p className='cat-info'>Veckans vinnare är ingen mindre än Kjell! Han har varit och nosat på toppen länge och denna veckan tog den skadeglada kattmodellen hem första priset. Kjell är en brittisk korthår som gillar korta promenader, att göra vacker tass och älskar uppmärksamhet.</p>
        <p>Tror du att din katt har vad det krävs för att vinna veckans hetaste kissemiss? Skicka då in ditt bidrag till veckanshetastekissemiss@purrfection.se.</p>
      </div>
    </section>
    </>
  );
};

export default CatOfTheWeek;