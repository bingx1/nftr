import PageRouter from '../../routes/PageRouter';
import Header from './Header';
import Footer from './Footer';

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
