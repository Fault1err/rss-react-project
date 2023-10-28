import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <div className="top-section">
          <input type="text" placeholder="Enter word" />
          <button>Search</button>
        </div>
        <div className="bottom-section">
          <h2>Search Results</h2>
          <ul className="results-block">
            <li>Result 1</li>
            <li>Result 2</li>
            <li>Result 3</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
