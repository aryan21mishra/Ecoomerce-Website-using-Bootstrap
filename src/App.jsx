
import { Outlet } from 'react-router-dom';
import Nav from './Compontents/Nav';
import Footer from './Compontents/Footer';

const App = () => {
  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
    
  );
};
export default App;
