import './styleFooter.scss';
import TitleText from '../TitleText';
import ParagraphText from '../ParagraphText';
import Logo from '../Logo';
import Socials from '../Socials';
import Octagon from '../ButtonCenter';
import Container from '../Container';
export default function Footer() {
  return (
      <footer className="section-footer">
        <Container>
        <TitleText>READY TO COLONIZE UNIVERSE?</TitleText>
        <ParagraphText>
          The Universe is vast, but only the strongest will survive. Will you
          rise up the challenge?!
        </ParagraphText>

        <Octagon isDark styles={{ justifySelf: 'center' }}>
          {' '}
          <a href="/" className="section-footer__play">
            play
          </a>{' '}
        </Octagon>
        <Logo
          stylesWrapper={{
            margin: '7rem 0 3rem 0',
            height: '61px',
          }}
        />
        <Socials style={{ justifySelf: 'center' }} />
    </Container>
      </footer>
  );
}
