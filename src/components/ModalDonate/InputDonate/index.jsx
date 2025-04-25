import './styleInputDonate.scss';
import Octagon from '../../ButtonCenter';
export default function InputDonate({
  label,
  icon,
  value,
  onChange,
  endContent,
  type = 'text',
}) {
  return (
    <div className="section-donate__input">
        {label && (
          <label className="section-donate__input-label">{label}</label>
        )}
      <Octagon isInput isDark>
        <div className="section-donate__input-container">
          <div className="section-donate__input-container__start">
            {icon && <span className="section-donate__input-container-icon">{icon}</span>}
            <input className='section-donate__input-container__input' type={type} value={value} onChange={onChange} />
          </div>
          {endContent && (
            <div className="section-donate__input-container__end">{endContent}</div>
          )}
        </div>
      </Octagon>
    </div>
  );
}
