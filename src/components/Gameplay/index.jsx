import styles from './styleGameplay.module.scss';
import ParagraphText from '../ParagraphText';
import TitleText from '../TitleText';
// import gameplayCards from '/assets/gameplayCards.png';
import planetBlue from '/assets/gameplayPlanetBlue.png';
import planetRed from '/assets/gameplayPlanetRed.png';
import satelliteLeft from '/assets/gameplaySatelliteLeft.png';
import satelliteRight from '/assets/gameplaySatelliteRight.png';
import { useEffect,useState } from 'react';
import CarouselCards from '../CarouselCards';
export default function Gameplay() {
    const [scrollY, setScrollY] = useState(0);
    const [showParagraphMobile,setShowParagraphMobile] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      const handleParagraph = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 451) setShowParagraphMobile(true);
        else setShowParagraphMobile(false);
      }
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleParagraph);
      handleParagraph();
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <section className={styles['section-gameplay']}>
      <article className={styles['section-gameplay__content']}>
        {!showParagraphMobile ? (<ParagraphText>
          Own a planet to dominate the Universe!
          Expand your planetary empire by managing resources and building
          powerful
           signature decks.Forge alliances, and win epic battles.
          
          Сlimb the leaderboard, and claim your place in the Universe!
        </ParagraphText>) : (<ParagraphText>
          Take part in battles and colonize planets. Choose your strategy and defeat your opponents: play for attrition, control or go on an aggressive attack
        </ParagraphText>) }
        <TitleText>unique gameplay</TitleText>
        <CarouselCards />
        <img className={styles['section-gameplay__content--planetB']}  style={{ transform: `translateY(${-scrollY * 0.1}px)` }} src={planetBlue} alt="planet blue" />
        <img className={styles['section-gameplay__content--planetR']}  style={{ transform: `translateY(${-scrollY * 0.15}px)` }} src={planetRed} alt="planet red" />
        <img className={styles['section-gameplay__content--satelliteL']}  style={{ transform: `translateY(${-scrollY * 0.09}px)` }} src={satelliteLeft} alt="satellite" />
        <img className={styles['section-gameplay__content--satelliteR']}  style={{ transform: `translateY(${-scrollY * 0.09}px)` }} src={satelliteRight} alt="satellite" />
        {showParagraphMobile && (<ParagraphText>Special cards with various characteristics and properties. Each signature belongs toone of three elements: BTC, ETH, or DASH, opening unlimited possibilities for creating powerful combinations.</ParagraphText>)}
      </article>
    </section>
  );
}
