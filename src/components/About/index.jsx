import './styleAbout.scss';
import TitleText from '../TitleText';
import yellowSatellite from '/assets/aboutSatelliteYellow.png';
import redSatellite from '/assets/aboutSatelliteRed.png';
import { useState, useEffect } from 'react';
import cardAmazing from '/assets/aboutCardAmazing.png';
import cardReferrals from '/assets/aboutCardReferrals.png';
import cardFusion from '/assets/AboutCardFusion.png';
import cardRewards from '/assets/AboutCardRewards.png';
import cardWar from '/assets/AboutCardWar.png';
import cardBeacons from '/assets/AboutCardBeacons.png';
import cardStellar from '/assets/AboutCardStellar.png';
import Octagon from '../ButtonCenter';
import Socials from '../Socials';
import '../../index.scss';
import Container from '../Container';
export default function About() {
  const itemsCard = [
    {
      img: cardAmazing,
      title: 'AWESOME BATTLES',
      text: 'Participate in thrilling battles and colonize planets. Choose your strategy and defeat your opponents: play for depletion, control or go on the offensive. Become the greatest Commander and leave your mark on the history of the Universe!',
      isFirst: true,
    },
    {
      img: cardReferrals,
      title: 'referral system',
      text: 'The referral system has 5 levels and is beneficial for both invited veteran Commanders and newly elected Rulers of new planets. Bring your friends and get rewards!',
    },
    {
      img: cardFusion,
      title: 'FUSION',
      text: "The world is fragile even within the confines of a single planet. The sustainable development of one's planet must be protected, and it is a great temptation to accelerate one's evolution at the expense of other planets' resources.Leverage the fusion of technologies by discovering new, more disruptive and sophisticated ways to impose your will!",
    },
    {
      img: cardRewards,
      title: 'REWARDS',
      text: "The game's economy is based on two tokens ($PPT, $ST), allowing players to enjoy the game and earn in the long term in different ways!",
    },
    {
      img: cardWar,
      title: 'WAR SECTOR',
      text: 'The place where battles deciding the fate of entire planets take place! Use powerful Signatures, show your tactical genius or sneaky tricks - the choice is yours!',
    },
    {
      img: cardBeacons,
      title: 'BEACONS',
      text: 'Get a rewards boost , reduce the cooldown of signature modules, increase power in battles of the Military sector. Claim this part of space!',
    },
    {
      img: cardStellar,
      title: 'stellar pass',
      text: 'A seasonal in-game event during which you pass progression stages and earn valuable rewards. Be sure to attend!',
    },
  ];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setScrollY(scroll - 700);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="section-about">
      <Container>
        {' '}
        <section className="section-about__content">
          <TitleText styles={{ margin:'4rem 0' }}>about</TitleText>
          {itemsCard.map((item, index) => {
            return (
              <Octagon isAboutCard key={index}>
                <div className="section-about__content__card">
                  <div className="section-about__content__card__img">
                    <img src={item.img} alt={''} />
                  </div>
                  <div className="section-about__content__card__text">
                    <h3 className="section-about__content__card__text--title">
                      {item.title}
                    </h3>
                    <p className="section-about__content__card__text--description">
                      {item.text}
                    </p>
                    {item.isFirst && (
                      <div className="section-about__content__card__utils">
                        <Octagon isDark className="about-play">
                          {' '}
                          <a
                            href="/"
                            className="section-about__content__card__utils--play"
                          >
                            play
                          </a>{' '}
                        </Octagon>
                        <Octagon className="about-socials" isDark>
                          <Socials />
                        </Octagon>
                      </div>
                    )}
                  </div>
                </div>
              </Octagon>
            );
          })}
        </section>
      </Container>
      <img
        src={yellowSatellite}
        alt="Satellite"
        className="section-about__content__satellite--yellow"
        style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
      />
      <img
        src={redSatellite}
        alt="Satellite"
        className="section-about__content__satellite--red"
        style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
      />
    </section>
  );
}
