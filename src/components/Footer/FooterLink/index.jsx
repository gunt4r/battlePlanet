import style from './styleFooterLink.module.scss'
export default function FooterLink({props,styles}) {
    return <a href='/'style={{...styles}} className={style['section-footer__link']}>{props}</a>
}