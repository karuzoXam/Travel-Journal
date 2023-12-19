import './App.css';
import Cart from './Cart';
import Navbar from './Navbar.jsx';
import data from './data/data.js';

function App() {
  const cards = data.map((item) => {
    return <Cart key={item.id} item={item} />;
  });

  return (
    <>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
