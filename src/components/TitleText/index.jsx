
import './styleTitleText.scss'
export default function TitleText({children,styles,className}) {
    return <p style={{...styles}} className={`section-title ${className ? className : ''}`}>{children}</p>
}