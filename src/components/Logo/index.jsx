import logo from '/assets/logo.svg';
import style from './styleLogo.module.scss';
import classNames from 'classnames';
export default function Logo({stylesWrapper,stylesElement}) {
  return (
    <a style={{...stylesWrapper}} href="/">
      <img
        src={logo}
        style={{...stylesElement}}
        className={classNames(style['section-logo'])}
        alt="Logo"
      />
    </a>
  );
}
