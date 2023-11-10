import Ad from '../../../components/blog/ad';
import { ads } from '../../../utility/utility';
import FilterBar from '../../../components/blog/filterBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Annonces',
}
const Annonces = () => {


  return (
    <div className="flex justify-start justify-center h-full w-full pt-16">
      <div className='flex justify-center flex-wrap relative '>

      {ads.map((ad, index) => (
        <Ad key={index} {...ad} />
      ))}

      </div>
    </div>
  );
};

export default Annonces;
