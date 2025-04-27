import './styleParagraphText.scss'
export default function ParagraphText({children,styles,className}) {
    return <p style={{...styles}} className={`section-paragraph ${className ? className : ''}`}>{children}</p>
}