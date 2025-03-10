import style from './styleParagraphText.module.scss'
export default function ParagraphText({children,styles}) {
    return <p style={{...styles}} className={style['section-paragraph']}>{children}</p>
}