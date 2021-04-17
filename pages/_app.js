// import App from "next/app";
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import { ThemeProvider } from 'styled-components';
import theme from '../components/theme';

function MyApp({ Component, pageProps }) {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
