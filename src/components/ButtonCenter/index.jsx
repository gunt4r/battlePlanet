import style from './styleButtonCenter.module.scss'
export default function ButtonCenter({children,styles}) {
    return <a href='/'style={{...styles}} className={style['element-button']}>{children}</a>
}