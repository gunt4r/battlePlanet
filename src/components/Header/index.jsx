import style from './styleHeader.module.scss';
import classNames from 'classnames';
import Logo from '../Logo';
export default function Header() {
  return (
    <header className={style['section-header']}>
      <Logo />
      <ul className={classNames(style['section-header__nav'])}>
        <li className={classNames(style['section-header__nav__item'])}>
          <a className={classNames(style['section-header__nav__item__link'])} href="/">ABOUT</a>
        </li>
        <li className={classNames(style['section-header__nav__item'])}>
          <a className={classNames(style['section-header__nav__item__link'])} href="/">COMMUNITY</a>
        </li>
        <li className={classNames(style['section-header__nav__item'])}>
          <a className={classNames(style['section-header__nav__item__link'])} href="/">P2E</a>
        </li>
      </ul>
      <a href='/' className={classNames(style['section-header__nav__item__button'])} >PLAY</a>
    </header>
  );
}
