import VendingMachine from './components/VendingMachine';

import './styles/index.scss';
/*
--- TASKS ---
1. products, terminal ... should be in separate folder and main file -> index.jsx
2. SCSS compiler
3. readme -> VM coins -> 1, 2, 5, 10, 20, 50, 100, 500
4. readme -> npx vite
5. store cash in storage
6. CHECK ALL FILES FOR COMMENTS (left some here and there)
--- ----- --- 
*/

function App() {
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
