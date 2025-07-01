import { Link } from "react-router-dom"
import { VideoComponent } from "../../utils/videoComponent"
import { PageTitle } from "../PageTitle/PageTitle"
import { Button } from "../Button/Button"
import arrowLeft from "../../img/arrow-left.png"
import './End.css'

export const End = () => {
    return (
        <div className="end_container">
            <PageTitle>
                <p>Mozkový uzel ZUZEL rozmotán. Gratulujeme!</p>
            </PageTitle>

            <VideoComponent />
            <Link to="/difficulty">
                <Button text="Začít trénink od začátku" image={arrowLeft} position="left" />
            </Link>
        </div>
    )
}