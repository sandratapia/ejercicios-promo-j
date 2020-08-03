import React from "react";
import "../stylesheet/App.css";
import { Link, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Counter from "./Counter";
import Relax from "./Relax";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/counter" render={() => <Counter />} />
          <Route path="/relax" render={() => <Relax />} />
        </Switch>
        <nav>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/relax">Relax</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
