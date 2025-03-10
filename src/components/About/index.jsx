import style from './styleAbout.module.scss';
import TitleText from '../TitleText';
import yellowSatellite from '@assets/aboutSatelliteYellow.png';
import redSatellite from '@assets/aboutSatelliteRed.png';
import { useState,useEffect } from 'react';
import VideoCard from './VideoCard';
export default function About() {
    const [scrollY, setScrollY] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
    <section className={style['section-about']}>
      <section className={style['section-about__content']}>
        <TitleText styles={{ paddingTop: '2rem' }}>about</TitleText>
        <img
          src={yellowSatellite}
          alt="Satellite"
          className={style['section-about__content__satellite--yellow']}
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        />
        <img
          src={redSatellite}
          alt="Satellite"
          className={style['section-about__content__satellite--red']}
          style={{ transform: `translateY(${-scrollY * 0.4}px)` }}
        />
        <VideoCard />
      </section>
    </section>
  );
}
