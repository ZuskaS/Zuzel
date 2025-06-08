import { Link } from "react-router-dom"
import { VideoComponent } from "../../utils/videoComponent"
import { PageTitle } from "../PageTitle/PageTitle"
import { Button } from "../Button/Button"


export const End = () => {
    return (
        <>
            <PageTitle>
                <p>Hotovo! Vaše paměť si zaslouží pochvalu - ale trénovat ji můžete i dál. Vraťte se kdykoliv!</p>
            </PageTitle>

            <VideoComponent/>

             <Link to="/difficulty">
              <Button text="Začít trénink od začátku" />
            </Link>


        </>
    )
}