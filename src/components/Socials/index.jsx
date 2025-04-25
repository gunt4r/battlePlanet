import  './styleSocials.scss';
import SocialIcons from './SocialIcons';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa6';
export default function Socials({style}) {
    return <section style={{...style}} className='section-socials'>
    <SocialIcons link="https://twitter.com">
      <FaXTwitter style={{ width: '29px', height: '27px' }} />{' '}
    </SocialIcons>
    <SocialIcons link="https://t.me">
      <FaTelegram style={{ width: '29px', height: '27px' }} />{' '}
    </SocialIcons>
    <SocialIcons link="https://messenger.com">
      <FaFacebookMessenger style={{ width: '29px', height: '27px' }} />{' '}
    </SocialIcons>
  </section>
}