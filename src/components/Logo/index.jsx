import logo from '/assets/logo.svg';
import './styleLogo.scss';
export default function Logo({stylesWrapper,stylesElement}) {
  return (
    <a style={{...stylesWrapper}} className="section-logo" href="/">
      <img
        src={logo}
        style={{...stylesElement}}
        className='section-logo__img'
        alt="Logo"
      />
    </a>
  );
}
