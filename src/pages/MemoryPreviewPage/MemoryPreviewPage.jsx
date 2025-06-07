import { PageTitle } from '../../Components/PageTitle/PageTitle';
import lupa from '../../img/lupa.png';

export const MemoryPreviewPage = () => {
  return (
    <PageTitle>
      <div className="pageTitle-memory">
        <img className="instruction__lupa memory" src={lupa} alt="lupa" />
        <p>Zapamatujte si rozložení mřížky.</p>
      </div>
    </PageTitle>
  );
};
