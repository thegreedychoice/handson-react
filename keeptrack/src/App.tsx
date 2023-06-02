import './App.css';
import ProjectsPage from './projects/ProjectsPage';

function App() {
  return (
    <div className="container">
      <ProjectsPage />
    </div>
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
