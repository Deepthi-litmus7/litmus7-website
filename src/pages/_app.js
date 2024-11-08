import '../styles/globals.css';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import Video from '@/components/atoms/Video';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Video/>
      <Footer />
    </div>
  );
}

export default MyApp;
