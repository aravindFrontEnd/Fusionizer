import { Link, Outlet,useNavigation } from 'react-router-dom';
import Navbar from '../assets/components/Navbar';
import Footer from '../assets/components/Footer';

const HomeLayout = () => {

  const navigation = useNavigation();

  const isPending = navigation.state === 'loading';

  return (
    <>
      <Navbar />
      <section className='page'>
        {isPending ? <div className='loading' /> : <Outlet />}
        <Footer className='mt-15' />
      </section>
    </>
  );
};
export default HomeLayout;
