import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL } from './constants';
import Character from './components/Character';

const App = () => {
 const [characters, setCharacters] = useState([])

 

useEffect(() => {
  axios.get(`${BASE_URL}`)
.then(res=>
  setCharacters(res.data))
.catch(err=>
  console.err(err))
}, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
     {characters.map( character => {
      return <Character info={character} key={character.name} />
     })
     }
    </div>
  );
}

export default App;


 // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
