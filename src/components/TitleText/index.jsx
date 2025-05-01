
import './styleTitleText.scss'
export default function TitleText({children,styles,className,isFirst }) {
    return <h1 style={{...styles}} className={`section-title ${isFirst ? 'section-title--first' : ''} ${className ? className : ''}`}>{children}</h1>
}