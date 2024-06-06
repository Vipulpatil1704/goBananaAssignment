
import './App.css';
import AlignItemsList from './components/AlignItemsList';
import React, { useState } from 'react'
function App() {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div className="App">
      <div className='search'>
        <input onChange={handleChange} type="text" name='search' value={value} placeholder='Search Posts Here(search in latin only bz data is in latin language)' />
      </div>
      <div className='list-items'>
        <AlignItemsList searchValue={value} />
      </div>
    </div>
  );
}

export default App;
