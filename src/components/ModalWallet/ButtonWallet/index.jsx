import './styleButtonWallet.scss'
export default function ButtonWallet({icon,text,styles,href,onClick}) {
    if(href) {
        return (
            <a href={href} style={{...styles}}  className="modal-wallet__button">
                {icon}
                <p className='modal-wallet__button--text'>{text}</p>
            </a>
        )
    }
    return (
        <button style={{...styles}} onClick={onClick} className="modal-wallet__button">
            {icon}
            <p className='modal-wallet__button--text'>{text}</p>
        </button>
    )
}