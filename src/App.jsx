import { useState } from 'react';
import './App.css';
import SvelteCounter from './SvelteCounter.svelte';
import ReactCounter from './ReactCounter';
import SvelteWrapper from './SvelteWrapper';


const SvelteCounterWithSvelteWrapper = SvelteWrapper(SvelteCounter);

function App() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount((count) => count + 1);
  }
  return (
    <main>
      <h1> React + Svelte</h1>
      <SvelteCounterWithSvelteWrapper  count={count} onClick={onClick} />
      <ReactCounter count={count} onClick={onClick}/>
    </main>
  )
}

export default App
