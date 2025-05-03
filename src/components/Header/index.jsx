import './styleHeader.scss';
import Logo from '../Logo';
import Octagon from '../ButtonCenter';
import { useState } from 'react';
import ModalWallet from '../ModalWallet';
import ModalDonate from '../ModalDonate';
import { FaBars, FaTimes } from 'react-icons/fa';
export default function Header() {
  const [isOpenWallet, setIsOpenWallet] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpenDonateModal, setIsOpenDonateModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleClickConnect = () => {
    if (!isAuthenticated) {
      setIsOpenWallet(!isOpenWallet);
    } else {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <header className="section-header">
      <Octagon>
        <Logo />
      </Octagon>
      <Octagon className="section-header__play--wrapper">
        <a href="/" className="section-header__play">
          play
        </a>
      </Octagon>
      <div className="desktop-buttons">
        <div className="section-header__connect-wrapper">
          <button
            onClick={handleClickConnect}
            className="section-header__connect"
          >
            <Octagon fullOpacity={isAuthenticated}>
              <p className="section-header__connect--text">
                {isAuthenticated ? '0x349345463e4r' : 'connect'}
              </p>
            </Octagon>
            <ModalWallet
              isOpen={isOpenWallet}
              onClose={() => setIsOpenWallet(false)}
            />
          </button>

          <Octagon
            className={`${
              isAuthenticated && isDropdownOpen
                ? 'section-header__connects--active'
                : ''
            } section-header__connects`}
            fullOpacity
            isDropdownButton
          >
            <div className="section-header__connect__dropdown">
              <button
                className="section-header__connect__dropdown--button"
                onClick={() => setIsOpenDonateModal(true)}
              >
                donate
              </button>
              <button
                className="section-header__connect__dropdown--button"
                onClick={() => {
                  setIsDropdownOpen(false);
                  setIsAuthenticated(false);
                }}
              >
                Disconnect
              </button>
            </div>
          </Octagon>

          <ModalDonate
            isOpen={isOpenDonateModal}
            onClose={() => setIsOpenDonateModal(false)}
          />
        </div>
      </div>

      <Octagon className="button-menu">
        {' '}
        <div className="burger-icon" onClick={() => setIsMobileMenuOpen(true)}>
          <FaBars color="white" size={24} />
        </div>
      </Octagon>

      <div
        className={`section-header__mobile-menu ${
          isMobileMenuOpen ? 'section-header__mobile-menu--active' : ''
        }`}
      >
        <div
          className="section-header__mobile-menu-close"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <FaTimes color="white" size={24} />
        </div>

        <Octagon isDark>
          <a href="/" className="section-header__play">
            play
          </a>
        </Octagon>

        <div className="section-header__connect-wrapper__buttons">
          <button
            onClick={handleClickConnect}
            className="section-header__connect"
          >
            <Octagon isDark fullOpacity={isAuthenticated}>
              <p className="section-header__connect--text">
                {isAuthenticated ? '0x349345463e4r' : 'connect'}
              </p>
            </Octagon>
          </button>

          <Octagon
            className={`${
              isAuthenticated && isDropdownOpen
                ? 'section-header__connects--active'
                : ''
            } section-header__connects`}
            isDark
            fullOpacity
            isDropdownButton
          >
            <div className="section-header__connect__dropdown">
              <button
                className="section-header__connect__dropdown--button"
                onClick={() => {
                  setIsOpenDonateModal(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                donate
              </button>
              <button
                className="section-header__connect__dropdown--button"
                onClick={() => {
                  setIsDropdownOpen(false);
                  setIsAuthenticated(false);
                  setIsMobileMenuOpen(false);
                }}
              >
                Disconnect
              </button>
            </div>
          </Octagon>
        </div>
      </div>
    </header>
  );
}
