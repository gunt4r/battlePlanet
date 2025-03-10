import style from './styleHero.module.scss';
import Header from '../Header';
import blueSatellite from '@assets/heroSatelliteBlue.png';
import redSatellite from '@assets/heroSatelliteRed.png';
import bigSatellite from '@assets/heroSatelliteBig.png';
import ParagraphText from '../ParagraphText';
import TitleText from '../TitleText';
import { useState,useEffect } from 'react';
import ButtonCenter from '../ButtonCenter';
import Socials from '../Socials';
export default function Hero() {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className={style['section-hero']}>
      <section className={style['section-hero__content']}>
        <Header />
        <img
          src={bigSatellite}
          alt="Satellite"
          className={style['section-hero__content__satellite--big']}
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        />
        <img
          src={blueSatellite}
          alt="Satellite"
          className={style['section-hero__content__satellite--blue']}
          style={{ transform: `translateY(${-scrollY * 0.4}px)` }}
        />
        <img
          src={redSatellite}
          alt="Satellite"
          className={style['section-hero__content__satellite--red']}
          style={{ transform: `translateY(${-scrollY * 0.5}px)` }}
        />
        <ParagraphText styles={{ marginTop: '30vh', marginBottom: '1rem' }}>
          Sci-Fi, Signature Collection, Multi stage Game
        </ParagraphText>
        <TitleText styles={{ fontSize: '136px',position:'relative',zIndex:'100' }}>BATTLE PLANETS</TitleText>
        <ButtonCenter styles={{marginTop:'2rem'}}>play</ButtonCenter>
        <Socials style={{position:'absolute',bottom:'0',left:'10%',transform:'translateX(-50%)',zIndex:'100'}} />
      </section>
    </section>
  );
}
