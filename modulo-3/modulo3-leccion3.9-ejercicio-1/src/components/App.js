import React from "react";
import "../stylesheet/App.css";

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbersListItems: numbers.map((n) => <li key={n}>{n}</li>),
    };
    this.filterNumberListItems = this.filterNumberListItems.bind(this);
  }

  filterNumberListItems(ev) {
    const target = ev.target;
    const number = Number(target.value);
    const numbersFiltered = numbers
      .filter((n) => n > number)
      .map((n, idx) => {
        return <li key={idx}>{n}</li>;
      });
    this.setState({ numbersListItems: numbersFiltered });
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Introduce un número:
            <input type="text" onChange={this.filterNumberListItems} />
          </label>
        </form>
        <ul>{this.state.numbersListItems}</ul>
      </div>
    );
  }
}

export default App;
