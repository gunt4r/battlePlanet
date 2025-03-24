import styles from './styleFooter.module.scss';
import TitleText from '../TitleText';
import ParagraphText from '../ParagraphText';
import ButtonCenter from '../ButtonCenter';
import Logo from '../Logo';
import Socials from '../Socials';
import { useEffect, useState } from 'react';
import FooterLink from './FooterLink';
export default function Footer() {
  const [showParagraphMobile, setShowParagraphMobile] = useState(false);
  useEffect(() => {
    const handleParagraph = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 451) setShowParagraphMobile(true);
      else setShowParagraphMobile(false);
    };
    window.addEventListener('resize', handleParagraph);
  }, []);
  return (
    <footer className={styles['section-footer']}>
      {!showParagraphMobile && (
        <ParagraphText>
          AWESOME SIGNATURES OF THREE ELEMENTS: $BTC, $ETH, $DASH  OPENING
          UNLIMITED POSSIBILITIES AND POWERFULL COMBINATIONS!
          
          Is there a lot of profit to be made by the Leader of an Entire Planet?
           Are you ready to check it out?!
        </ParagraphText>
      )}
      <TitleText>
        READY TO COLONIZE  UNIVERSE?
      </TitleText>
      {showParagraphMobile ? (
        <ParagraphText>
          The Universe is vast, but only the strongest will survive.
           Will you rise up the challenge?!
        </ParagraphText>
      ) : (
        <ParagraphText>
          Special cards with various characteristics and properties. Each
          signature belongs toone of three elements: BTC, ETH, or DASH, opening
          unlimited possibilities for creating powerful combinations.
        </ParagraphText>
      )}
      <ButtonCenter styles={{ height: '67px', width: '185px' }}>
        Lets go
      </ButtonCenter>
      <Logo
        stylesWrapper={{
          display: 'flex',
          justifyContent: 'center',
          margin: '7rem 0 3rem 0',
          width: 'fit-content',
          justifySelf: 'center',
        }}
      />
      <Socials />
      <section className={styles['section-footer__links']}>
        <FooterLink props="privacy policy" />
        <div className={styles['section-footer__links__line']}></div>
        <FooterLink props="api" />
        <div className={styles['section-footer__links__line']}></div>
        <FooterLink props="about us" />
      </section>
    </footer>
  );
}
