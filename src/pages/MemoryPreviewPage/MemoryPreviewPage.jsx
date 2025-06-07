import { PageTitle } from "../../Components/PageTitle/PageTitle"
import lupa from '../../img/lupa.png'

export const MemoryPreviewPage = () => {
    return (
        <PageTitle >
            <img className="instruction__lupa" src={lupa} alt="lupa" />
            <p>Zapamatujte si rozložení mřížky.</p>
        </PageTitle>




    )
}