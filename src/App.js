import './App.css';
import Button from './components/Button';
import logo from './logo.svg';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     <h1>Hello React! 👋😀</h1>
     <p>Hola terrícolas</p>
     <Button text='Enviar'></Button>
     <Button text='Borrar' clase='frame'></Button>
     <Button clase='solid-green'></Button>
     <Button text='goodbye'></Button>
     <div className='container'>
        <img src={logo} alt="logotipo React"></img>
        <Counter></Counter>
        <Counter text='👎🏻'></Counter>
     </div>
    </div>
  );
}

export default App; 

