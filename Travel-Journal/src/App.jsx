import './App.css';
import Card from './Card.jsx';
import Navbar from './Navbar.jsx';
import data from './data/data.js';

function App() {
  const cards = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
