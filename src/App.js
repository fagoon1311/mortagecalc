import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className='text-3xl font-bold text-cyan-900 border border-slate-300 bg-cyan-50 p-2 m-2 rounded-md'>Mortage Calculator</div>
      <Calculator />
    </div>
  );
}

export default App;
