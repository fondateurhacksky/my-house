import Ad from '../../../components/blog/ad';
import { ads } from '../../../utility/utility';
import { Metadata } from 'next';
import NavBar from '../../../components/Navbar/NavBar';

export const metadata: Metadata = {
  title: 'Annonces',
}
const Annonces = () => {


  return (
    <main>
      <NavBar />
    <div className="flex justify-start justify-center h-full w-full pt-16">
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
