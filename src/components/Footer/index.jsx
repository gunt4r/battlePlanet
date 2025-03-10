import styles from './styleFooter.module.scss';
import TitleText from '../TitleText';
import ParagraphText from '../ParagraphText';
import ButtonCenter from '../ButtonCenter';
import Logo from '../Logo';
import Socials from '../Socials';

import FooterLink from './FooterLink';
export default function Footer() {
  return (
    <footer className={styles['section-footer']}>
      <ParagraphText>
        AWESOME SIGNATURES OF THREE ELEMENTS: $BTC, $ETH, $DASH <br /> OPENING
        UNLIMITED POSSIBILITIES AND POWERFULL COMBINATIONS!
        <br />
        Is there a lot of profit to be made by the Leader of an Entire Planet?
        <br /> Are you ready to check it out?!
      </ParagraphText>
      <TitleText>
        READY TO COLONIZE <br /> UNIVERSE?
      </TitleText>
      <ParagraphText>
        The Universe is vast, but only the strongest will survive.
        <br /> Will you rise up the challenge?!
      </ParagraphText>
      <ButtonCenter>Lets go</ButtonCenter>
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
