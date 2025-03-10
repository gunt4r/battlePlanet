import styles from './styleGameplay.module.scss';
import ParagraphText from '../ParagraphText';
import TitleText from '../TitleText';
import gameplayCards from '@assets/gameplayCards.png';
import planetBlue from '@assets/gameplayPlanetBlue.png';
import planetRed from '@assets/gameplayPlanetRed.png';
import satelliteLeft from '@assets/gameplaySatelliteLeft.png';
import satelliteRight from '@assets/gameplaySatelliteRight.png';
import { useEffect,useState } from 'react';
export default function Gameplay() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <section className={styles['section-gameplay']}>
      <article className={styles['section-gameplay__content']}>
        <ParagraphText>
          Own a planet to dominate the Universe!
          <br />
          Expand your planetary empire by managing resources and building
          powerful
          <br /> signature decks.Forge alliances, and win epic battles.
          <br />
          Сlimb the leaderboard, and claim your place in the Universe!
        </ParagraphText>
        <TitleText>unique gameplay</TitleText>
        <img
          className={styles['section-gameplay__content__cards']}
          src={gameplayCards}
          alt="Cards"
        />
        <img className={styles['section-gameplay__content--planetB']}  style={{ transform: `translateY(${-scrollY * 0.1}px)` }} src={planetBlue} alt="planet blue" />
        <img className={styles['section-gameplay__content--planetR']}  style={{ transform: `translateY(${-scrollY * 0.15}px)` }} src={planetRed} alt="planet red" />
        <img className={styles['section-gameplay__content--satelliteL']}  style={{ transform: `translateY(${-scrollY * 0.09}px)` }} src={satelliteLeft} alt="satellite" />
        <img className={styles['section-gameplay__content--satelliteR']}  style={{ transform: `translateY(${-scrollY * 0.09}px)` }} src={satelliteRight} alt="satellite" />
      </article>
    </section>
  );
}
