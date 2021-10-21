import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import Banner from './Component/Top-banner/Banner';


function App() {
  
  return (
    // Full Website
    <div className='body'>
      {/* -------navber----------- */}
      <Header></Header>
      {/* -------Top Banner--------- */}
      <Banner></Banner>
      {/* ------Cart and Header */}
      <Shop></Shop>
    </div>
  );
}

export default App;
