import './styleParagraphText.scss'
export default function ParagraphText({children,styles}) {
    return <p style={{...styles}} className='section-paragraph'>{children}</p>
}