import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Edit from './views/Edit';
import PetForm from './components/PetForm';
import Details from './views/Details';


function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Main path="/"></Main>
        <PetForm path="/pets/new"></PetForm>
        <Details path="/pets/:id"></Details>
        <Edit path="/pets/edit/:id"></Edit>
      </Router>
    </div>
  );
}

export default App;
