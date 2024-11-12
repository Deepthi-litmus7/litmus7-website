import '../styles/globals.css';
import localFont from 'next/font/local';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';


// Load each weight of Albert Sans as a separate variable
const albertSansLight = localFont({
  src: "fonts/AlbertSans-Light.ttf",
  variable: '--font-albert-sans-light',
  weight: '300',
});

const albertSansRegular = localFont({
  src: '/fonts/AlbertSans-Regular.ttf',
  variable: '--font-albert-sans-regular',
  weight: '400',
});

const albertSansMedium = localFont({
  src: '/fonts/AlbertSans-Medium.ttf',
  variable: '--font-albert-sans-medium',
  weight: '500',
});

const albertSansSemiBold = localFont({
  src: '/fonts/AlbertSans-SemiBold.ttf',
  variable: '--font-albert-sans-semibold',
  weight: '600',
});

const albertSansBold = localFont({
  src: '/fonts/AlbertSans-Bold.ttf',
  variable: '--font-albert-sans-bold',
  weight: '700',
});

const merriLightItalic = localFont({
  src: '/fonts/Merriweather-LightItalic.ttf',
  variable: '--merriLightItalic',
  weight: '300',
});

const merriItalic = localFont({
  src: '/fonts/Merriweather-Italic.ttf',
  variable: '--merriItalic',
  weight: '300',
});

function MyApp({ Component, pageProps }) {
  return (
    <div  className={`${albertSansLight.variable} ${albertSansRegular.variable} ${albertSansMedium.variable} ${albertSansSemiBold.variable} ${albertSansBold.variable} ${merriLightItalic.variable} ${merriItalic.variable}`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    
  );
}

export default MyApp;
