import mute from '../../Components/Header/img/mute.png';
import './TipsPage.css';
import sound_on from '../../Components/Header/img/sound_on.png';
import ZUZEL from '../HomePage/img/ZUZEL.png';
import { PageTitle } from '../../Components/PageTitle/PageTitle';
import { Button } from '../../Components/Button/Button';
import arrowRight from '../../img/arrow-right.png';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const TipsPage = () => {
  const [page, setPage] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isDesktop ? (
        <div>
          <PageTitle>
            <p>Tipy k ovládání aplikace</p>
          </PageTitle>
          <div className="tips-desktop">
            <div className="tips_container">
              <div className="info__text">
                <p>
                  Zvuky aplikace lze zapnout nebo vypnout ikonou v pravém horním
                  rohu.
                </p>
                <div className="sound_icons">
                  <img className="icon_sound" src={sound_on} alt="ikona zvuku" />
                  <img className="mute" src={mute} alt="ikona vypnutého zvuku" />
                </div>
              </div>
              <div className="info__text">
                <p>Ikona loga v levém horním rohu Vás vrátí na úvodní stranu.</p>
                <img className="img__logo" src={ZUZEL} alt="logo ZUZEL" />
              </div>
              <div className="info__text">
                <p>
                  Pokud aplikaci budete používat v mobilním telefonu či tabletu a
                  nebude reagovat, ujistěte se, že se obrazovky nedotýkáte jinými
                  prsty, např. při držení přístroje.
                </p>
              </div>
              <div className="info__text">
                <p>
                  Pro pohodlnější ovládání v telefonu či tabletu doporučujeme
                  použít dotykové pero.
                </p>
              </div>
              <div className="info__text">
                <p>
                  ZUZEL můžete trénovat i ve dvou - spolupráce vám pomůže zvládnout i náročnější úrovně.
                </p>
              </div>
              <div>
                <Link to="/instruction">
                  <Button text="Další" image={arrowRight} position="right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : page ? (
        <div className="tips-1">
          <div className="tips_container">
            <PageTitle>
              <p>Tipy k ovládání aplikace</p>
            </PageTitle>
            <div className="info__text">
              <p>
                {' '}
                Zvuky aplikace lze zapnout nebo vypnout ikonou v pravém horním
                rohu.{' '}
              </p>
              <div className="sound_icons">
                <img className="icon_sound" src={sound_on} alt="ikona zvuku" />
                <img className="mute" src={mute} alt="ikona vypnutého zvuku" />
              </div>
            </div>

            <div className="info__text">
              <p>Ikona loga v levém horním rohu Vás vrátí na úvodní stranu.</p>
              <img className="img__logo" src={ZUZEL} alt="logo ZUZEL" />
            </div>
            <Button
              onClick={() => setPage(false)}
              text="Další"
              image={arrowRight}
              position="right"
            />
          </div>
        </div>
      ) : (
        <div className="tips-2">
          <div className="tips_container">
            <div className="info__text">
              <p>
                Aplikace nereaguje? Ujistěte se, že se obrazovky nedotýkáte jinými prsty.
              </p>
            </div>
            <div className="info__text">
              <p>
                Pro pohodlnější ovládání doporučujeme použít dotykové pero.
              </p>
            </div>
            <div className="info__text">
              <p>
                ZUZEL můžete trénovat i ve dvou - spolupráce vám pomůže zvládnout i náročnější úrovně.
              </p>
            </div>
            <div>
              <Link to="/instruction">
                <Button text="Další" image={arrowRight} position="right" />
              </Link>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};
