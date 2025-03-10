
import style from './styleTitleText.module.scss'
export default function TitleText({children,styles}) {
    return <p style={{...styles}} className={style['section-title']}>{children}</p>
}