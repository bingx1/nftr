import PageRouter from '../../src/routes/PageRouter';
import Header from './Header';
import Footer from '../navigation/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <PageRouter />
      <Footer />
    </div>
  );
}

export default App;
