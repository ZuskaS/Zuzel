import gear from'./img/gear.png'
import './TipsPage.css'
import sound_on from '../../Components/Header/img/sound_on.png';
import ZUZEL from '../HomePage/img/Zuzel.png';


export const TipsPage = () => {
    return (
        <div>
            <div className="page-title">
                <p>Tipy k ovládání aplikace</p>
                <img className="icon_gear" src={gear} alt="ikona ozubeného kola" />
            </div>

            <div>
                <p> Zvuky aplikace lze zapnout nebo vypnout ikonou       v pravém horním rohu. </p>
                <img className='icon_sound' src={sound_on} alt='ikona zvuku' />
            </div>

            <div><p>Ikona loga v levém horním rohu Vás vrátí na úvodní stranu.</p>
                <img className="img__logo" src={ZUZEL} alt="logo ZUZEL" />
            </div>
        </div>


    )
}