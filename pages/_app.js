// import App from "next/app";
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import { ThemeProvider } from 'styled-components';
import theme from '../components/theme';
import { useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const setLogIn = () => {
    setLoggedIn((loggedIn) => !loggedIn);
  };

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Header isLoggedIn={loggedIn} />
        <Component {...pageProps} setLogIn={setLogIn} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
