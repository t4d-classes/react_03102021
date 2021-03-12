import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Route,
  Switch,
  useParams,
  useHistory,
} from "react-router-dom";
import { render } from "react-dom";

import "./index.css";

function Home() {
  return (
    <>
      <h2>Home</h2>
      <Link to="/about/2">About 2</Link>
    </>
  );
}

function About() {
  const params = useParams();
  const history = useHistory();

  return (
    <>
      <h2>About {params.id}</h2>
      <button type="button" onClick={() => history.push("/")}>
        Home
      </button>
    </>
  );
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
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/3" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <main id="content">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about/:id">
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
