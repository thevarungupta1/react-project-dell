import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
import Employee from './components/Employee';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import ClassBinding from './components/Classinding';

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      {/* <Message /> */}
      {/* <Counter/> */}
      {/* <Employee /> */}
      {/* <FunctionEvent/> */}
      {/* <ClassEvent/> */}
      <ClassBinding />
    </div>
  );
}

export default App;
