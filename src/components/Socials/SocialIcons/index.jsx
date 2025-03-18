import styles from './styleSocialIcons.module.scss';
export default function SocialIcons({ link, children, style }) {
  return (
    <a
      href={link}
      style={{ color: '#fff', ...style }}
      className={styles['section-socials__icons']}
    >
      {children}
    </a>
  );
}
