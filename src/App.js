import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Prop from './components/Prop';
import GreetingClass from './components/GreetingClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>This is my first React project</h1>
       <Greetings/>
       <Prop name="Hi there"/>
       <GreetingClass/>
      </header>
    </div>
  );
}

export default App;
