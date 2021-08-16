import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PostsWithFetch from "./PostsWithFetch";
import PostsWithAxios from "./PostsWithAxios";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home [Fetch API]</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/axios">With Axios</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/fetchapi">
            <PostsWithFetch />
          </Route>
          <Route path="/axios">
            <PostsWithAxios />
          </Route>
          <Route path="/">
            <PostsWithFetch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
