import './styleModalDonate.scss';
import ModalBackground from '../ModalBackground';
import Octagon from '../ButtonCenter';
import InputDonate from './InputDonate';
import { useState, useEffect } from 'react';
import usdtIcon from '/assets/modalDonate/usdt.svg';
import siteIcon from '/assets/modalDonate/st.svg';
const cryptoOptions = [
  { value: 'USDT', label: 'USDT TON', icon: <img src={usdtIcon} />, rate: 50 },
];

const siteCurrency = { value: 'st', label: 'st', icon: <img src={siteIcon} /> };

export default function ModalDonate({ isOpen, onClose }) {
  const [crypto, setCrypto] = useState(cryptoOptions[0]);
  const [cryptoAmount, setCryptoAmount] = useState(1);
  const [siteAmount, setSiteAmount] = useState(cryptoOptions[0].rate);
  useEffect(() => {
    setCryptoAmount(1);
    setSiteAmount(crypto.rate);
  }, [crypto]);

  const handleCryptoAmountChange = (e) => {
    const v = e.target.value;
    setCryptoAmount(v);
    const num = parseFloat(v);
    setSiteAmount(!isNaN(num) ? num * crypto.rate : '');
  };

  const handleSiteAmountChange = (e) => {
    const v = e.target.value;
    setSiteAmount(v);
    const num = parseFloat(v);
    setCryptoAmount(!isNaN(num) && crypto.rate > 0 ? num / crypto.rate : '');
  };
  return (
    <div>
      <ModalBackground
        isOpen={isOpen}
        onClose={() => onClose()}
        modalTitle={'TOP UP YOUR ACCOUNT'}
        modalSubTitle={'Buy $ST to your gaming account'}
        className={`${isOpen ? 'modal-overlay--active' : ''}`}

      >
        <div className="modal-donate">
          <div className='modal-donate__inputs'>
            <InputDonate
              label="You Give"
              icon={crypto.icon}
              value={cryptoAmount}
              onChange={handleCryptoAmountChange}
              endContent={
                <select
                  value={crypto.value}
                  onChange={(e) => {
                    const sel = cryptoOptions.find(
                      (o) => o.value === e.target.value
                    );
                    setCrypto(sel);
                  }}
                >
                  {cryptoOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              }
            />

            <InputDonate
              label="You get"
              icon={siteCurrency.icon}
              value={siteAmount}
              onChange={handleSiteAmountChange}
              endContent={<span>{siteCurrency.label}</span>}
            />
          </div>
              <Octagon isDark isConfirmButton className="modal-donate__button"> <p className='modal-donate__button--text'>Continue</p></Octagon>
        </div>
      </ModalBackground>
    </div>
  );
}
