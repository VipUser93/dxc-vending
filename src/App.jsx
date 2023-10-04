import { useState } from 'react';
import VendingMachine from './components/VendingMachine';

import './styles/index.scss';
/*
--- TASKS ---
1. products, terminal ... should be in separate folder and main file -> index.jsx
2. SCSS compiler
3. readme -> VM coins -> 1, 2, 5, 10, 20, 50, 100, 500
4. readme -> npx vite
--- ----- --- 
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="head">
          <h1>Vending machine</h1>
        </div>
        <VendingMachine />
      </div>
    </>
  )
}

export default App;
