import './styleFooter.scss';
import TitleText from '../TitleText';
import ParagraphText from '../ParagraphText';
import Logo from '../Logo';
import Socials from '../Socials';
import Octagon from '../ButtonCenter';
export default function Footer() {
  return (
    <footer className='section-footer'>
      <TitleText >
        READY TO COLONIZE UNIVERSE?
      </TitleText>
      <ParagraphText>
        The Universe is vast, but only the strongest will survive. Will you rise
        up the challenge?!
      </ParagraphText>

      <Octagon isDark styles={{padding: '3px 56px',justifySelf:'center'}}>
        {' '}
        <a href="/" className="section-footer__play">
          play
        </a>{' '}
      </Octagon>
      <Logo
        stylesWrapper={{
          display: 'flex',
          justifyContent: 'center',
          margin: '7rem 0 3rem 0',
          justifySelf: 'center',
          height: '61px',
        }}
      />
      <Socials style={{justifySelf:'center'}} />
    </footer>
  );
}
