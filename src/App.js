import './App.css';
import ShoppingCard from './Components/ShoppingCard';

function App() {

  const shoppingData = [
    {
      title: "Fake Title1",
      description: "Fake Description",
    },
    {
      title: "Fake Title2",
      description: "Fake Description",
    },
    {
      title: "Fake Title3",
      description: "Fake Description",
    },
    {
      title: "Fake Title4",
      description: "Fake Description",
    },
    {
      title: "Fake Title5",
      description: "Fake Description",
    },
  ];
 
  return (
    <div className="App">
      <header className="App-header">
          <h1>Fake Shopping app</h1>
          <div className='shopping-container'>
            <ShoppingCard shoppingData={shoppingData} />
          </div>
      </header>
    </div>
  );
}

export default App;
