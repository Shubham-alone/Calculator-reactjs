
import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';

function App() {

  const [value,setValue] = useState('');

  return (
    <div className="container">
       <div className='calculator'>
          <Display value={value} />

          <Button value={value} setValue={setValue} />
       </div>
    </div>
  );
}

export default App;
