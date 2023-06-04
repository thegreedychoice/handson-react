import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import ProjectPage from './projects/ProjectPage';
import { Provider } from 'react-redux';
import { store } from './state';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import HomePage from './home/HomePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <header className="sticky">
          <span className="logo">
            <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
          </span>
          <NavLink to="/" className="button rounded">
            <span className="icon-home"></span>
            Home
          </NavLink>
          <NavLink to="/projects" className="button rounded">
            Projects
          </NavLink>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

/* import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import Button, {
  ExplainBindingsClassComponentArrow,
} from './temp/components/Button/ButtonClassWithEvent';

import Hello from './temp/components/Hello/HelloClassWithEvent';

import FruitList, {
  PropsFruitListItem,
} from './temp/components/FruitList/FruitListWithEvent';

import {
  ExplainBindingFunctionComponentArrow,
  ExplainBindingFunctionComponentDefault,
} from './temp/components/Button/ButtonFunctionWithEvent';

const dataFruitList: PropsFruitListItem[] = [
  {
    id: '1',
    name: 'Apple',
  },
  {
    id: '2',
    name: 'Orange',
  },
  {
    id: '3',
    name: 'Banana',
  },
  // Add more fruit items as needed
];

function App() {
  return (
    <div className="container">
      <Hello name="Evis" enthusiasmLevel={2}></Hello>
      <Button />
      <ExplainBindingsClassComponentArrow />
      <ExplainBindingFunctionComponentDefault />
      <ExplainBindingFunctionComponentArrow />
      <FruitList fruits={dataFruitList} />
      <ProjectsPage />
    </div>
  );
}

export default App;
 */
