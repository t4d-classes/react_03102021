import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { render } from "react-dom";

import "./index.css";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <div className="container">
      <header id="page-header">
        <h1>Cool Company Website</h1>
      </header>
      <nav id="main-menu">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
        </ul>
      </nav>
      <main id="content">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
      <aside id="sidebar">sidebar</aside>
      <footer id="page-footer">
        <small>&copy; {new Date().getFullYear()} A Cool Company, Inc.</small>
      </footer>
    </div>
  );
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
