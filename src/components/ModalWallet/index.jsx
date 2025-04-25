import './styleModalWallet.scss';
import ModalBackground from '../ModalBackground';
import ButtonWallet from './ButtonWallet';
import iconMetamask from '/assets/modalWallet/Metamask.svg';
import iconCoinbase from '/assets/modalWallet/Coinbase.svg';
import iconWalletConnect from '/assets/modalWallet/WalletConnect.svg';
import iconTrustWallet from '/assets/modalWallet/TrustWallet.svg';
import Octagon from '../ButtonCenter';
export default function ModalWallet({ isOpen, onClose }) {
  const contentButtons = [
    {
      icon: <img src={iconMetamask} alt="metamask" />,
      text: 'MetaMask',
      onClick: () => console.log('MetaMask'),
    },
    {
      icon: <img src={iconCoinbase} alt="Coinbase" />,
      text: 'Coinbase',
      onClick: () => console.log('Coinbase'),
    },
    {
      icon: <img src={iconWalletConnect} alt="WalletConnect" />,
      text: 'WalletConnect',
      onClick: () => console.log('WalletConnect'),
    },
    {
      icon: <img src={iconTrustWallet} alt="Trust Wallet" />,
      text: 'Trust Wallet',
      onClick: () => console.log('Trust Wallet'),
    },
  ];
  return (
    <div>
      <ModalBackground
        isOpen={isOpen}
        onClose={() => onClose()}
        modalTitle={'Connect wallet'}
        modalSubTitle={'Connect a wallet to continue'}
        className="modal-wallet"
      >
        <div className="modal-wallet">
          {' '}
          {contentButtons.map((item, index) => (
            <Octagon isButtonModal isDark key={index}>
              <ButtonWallet
                icon={item.icon}
                text={item.text}
                onClick={item.onClick}

              />
            </Octagon>
          ))}
        </div>
      </ModalBackground>
    </div>
  );
}
