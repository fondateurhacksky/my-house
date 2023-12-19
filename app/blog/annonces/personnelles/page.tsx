import Ad from '../../../../components/blog/ad';
import { ads } from '../../../lib/place-holder-data';
import { Metadata } from 'next';
import NavBar from '../../../ui/NavBar';

export const metadata: Metadata = {
  title: 'Annonces',
}
const Annonces = () => {


  return (
    <main>
      <NavBar />
    <div className="h-full w-full pt-20">
      <div className='flex justify-center flex-wrap relative '>
   
      {ads.map((ad, index) => (
        <Ad key={index} {...ad} />
      ))}

      </div>
    </div>
    </main>
  );
};

export default Annonces;
