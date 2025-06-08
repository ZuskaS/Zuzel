import gear from './img/gear.png';
import mute from '../../Components/Header/img/mute.png';
import './TipsPage.css';
import sound_on from '../../Components/Header/img/sound_on.png';
import ZUZEL from '../HomePage/img/ZUZEL.png';
import { PageTitle } from '../../Components/PageTitle/PageTitle';
import { Button } from '../../Components/Button/Button';
import arrowRight from '../../img/arrow-right.png';
import arrowLeft from '../../img/arrow-left.png';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export const TipsPage = () => {
  const [page, setPage] = useState(true);

  return page ? (
    <>
      <PageTitle>
        <img className="icon_gear" src={gear} alt="ikona ozubeného kola" />
        <p>Tipy k ovládání aplikace</p>
      </PageTitle>
      <div className="tips-1">
        <div className="tips_container">
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
            text="další"
            image={arrowRight}
            position="right"
          />
        </div>
      </div>
    </>
  ) : (
    <div className="tips_container">
      <div className="tips-2">
        <div className="info__text">
          <p>
            Pokud aplikace nereaguje, ujistěte se, že se obrazovky nedotýkáte
            jinými prsty, např. při držení telefonu.
          </p>
        </div>

        <div className="tips-2">
          <div className="info__text">
            <p>
              Pokud aplikace nereaguje, ujistěte se, že se obrazovky nedotýkáte
              jinými prsty, např. při držení telefonu.
            </p>
          </div>

          <div className="info__text">
            <p>Pro pohodlnější ovládání doporučujeme použít dotykové pero.</p>
          </div>
          <div>
            <Link to="/instruction">
              <Button text="další" image={arrowRight} position="right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
