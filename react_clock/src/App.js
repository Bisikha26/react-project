// import logo from './logo.svg';
import './App.css';
import DateTime from './components/Clock';
import Timer from './components/Timer';
import { Button } from './components/Buttons.styled';

function App() {
  return (
    <div className="App">
      {/* Learning styled components */}
     {/* <Button backgroundColor="red">Click this Button</Button>
     <Button backgroundColor="violet">Click this Button</Button> */}
     <DateTime></DateTime>
     <Timer></Timer>
    </div>
  );
}

export default App;
