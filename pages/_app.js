// import App from "next/app";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;