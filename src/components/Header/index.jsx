import style from './styleHeader.module.scss';
import classNames from 'classnames';
import Logo from '../Logo';
import ButtonCenter from '../ButtonCenter';
import { useEffect,useState } from 'react';
export default function Header() {
   const [hiddenElements, setHiddenElements] = useState(false);
    useEffect(() => {
      const updateHiddenElements = () => {
        const screenWidth = window.innerWidth;
  
        if (screenWidth < 640) setHiddenElements(true);
        else setHiddenElements(false);
      };
  
      window.addEventListener("resize", updateHiddenElements);
      updateHiddenElements();
    }, []);
  return (
    <header className={style['section-header']}>
      <Logo />
      <ul style={{ display: hiddenElements ? 'none' : 'flex' }} className={classNames(style['section-header__nav'])}>
        <li className={classNames(style['section-header__nav__item'])}>
          <a
            className={classNames(style['section-header__nav__item__link'])}
            href="/"
          >
            ABOUT
          </a>
        </li>
        <li className={classNames(style['section-header__nav__item'])}>
          <a
            className={classNames(style['section-header__nav__item__link'])}
            href="/"
          >
            COMMUNITY
          </a>
        </li>
        <li className={classNames(style['section-header__nav__item'])}>
          <a
            className={classNames(style['section-header__nav__item__link'])}
            href="/"
          >
            P2E
          </a>
        </li>
      </ul>
      <ButtonCenter styles={{ margin: 'unset', display: hiddenElements ? 'none' : 'flex' }}>play</ButtonCenter>
    </header>
  );
}
