import './styleOctagon.scss';

export default function Octagon({
  children,
  styles,
  isAboutCard,
  isModal,
  isButtonModal,
  isDropdownButton,
  isInput,
  isConfirmButton,
  isDark,
  fullOpacity,
  className
}) {
  return (
    <div
      style={{ ...styles }}
      className={`octagon ${isAboutCard ? 'about-card' : ''} ${
        isModal ? 'modal' : ''
      } ${isButtonModal ? 'button--modal' : ''} ${
        isDropdownButton ? 'dropdown-button' : ''
      } ${fullOpacity ? 'full-opacity' : ''}
      ${isInput ? 'input' : ''}
      ${isConfirmButton ? 'confirm-button' : ''}
      ${isDark ? 'dark' : ''}
      ${className ? className : ''}
      `}
    >
      {children}
    </div>
  );
}
