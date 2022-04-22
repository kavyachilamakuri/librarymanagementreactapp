import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useRoutes, Link } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import CoursesPage from './components/CoursesPage';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <WelcomePage /> },
    { path: "/add", element: <CoursesPage /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Course</Link>
            </li>
          </ul>
        </nav>
        <App />
      </Router>
    </>
  );
};

export default AppWrapper;
