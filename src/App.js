import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import CV from "./components/CV/cv";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/cv/:id" >
            <CV/>
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
