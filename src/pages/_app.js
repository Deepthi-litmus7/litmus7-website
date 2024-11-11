import '../styles/globals.css';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
