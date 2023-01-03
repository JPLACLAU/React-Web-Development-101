import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coin Exchange {sum}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <table>
        <Thread>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </Thread>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price="$16600.59" />
          <Coin name="Ethereum" ticker="ETH" price="$1201.48" />
        </tbody>
      </table>
    </div>
  );
}

export default App;
