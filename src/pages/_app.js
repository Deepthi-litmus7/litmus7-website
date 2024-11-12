import '../styles/globals.css';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
