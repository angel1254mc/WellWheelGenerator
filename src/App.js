
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App bg-zinc-700">
      <Header></Header>
      <div className= "w-full p-10">
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
