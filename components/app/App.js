import PageRouter from "../../src/routes/PageRouter";
import Footer from "../navigation/Footer";
import dynamic from "next/dynamic";

const Head = dynamic(
  () => {
    return import("../navigation/Header");
  },
  { ssr: false }
);

function App() {
  return (
    <div className="App">
      <Head />
      <PageRouter />
      <Footer />
    </div>
  );
}

export default App;
