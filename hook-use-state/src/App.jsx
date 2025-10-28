import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter.jsx'
import Selector from './component/Selector.jsx'
import MyLock from './component/MyLock.jsx'
import Car from './component/Car.jsx'
import TodoApp from './component/todolist/TodoApp.jsx'
import TodoAppJob from './component/todoJob/TodoAppJob.jsx'
import CountdownDemo from './component/CountdownDemo.jsx'
import ClickCounterDemo from './component/ClickCounterDemo.jsx'
function App() {
  const [view, setView] = useState("home")

  const renderView = () => {
    switch (view) {
      case "Counter":
        return <Counter />
      case "Selector":
        return <Selector />
      case "MyLock":
        return <MyLock />
      case "Car":
        return <Car />
      case "ToDoApp":
        return <TodoApp />
      case "TodoAppJob":
        return <TodoAppJob />
      case "CountdownDemo":
        return <CountdownDemo />
      case "ClickCounterDemo":
        return <ClickCounterDemo />
      default:
        return null
    }
  }

  return (
    <div className="App">
      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button onClick={() => setView('Counter')}>Counter</button>
        <button onClick={() => setView('Selector')}>Selector</button>
        <button onClick={() => setView('MyLock')}>MyLock</button>
        <button onClick={() => setView('Car')}>Car</button>
        <button onClick={() => setView('ToDoApp')}>ToDoApp</button>
        <button onClick={() => setView('TodoAppJob')}>TodoAppJob</button>
        <button onClick={() => setView('CountdownDemo')}>CountdownDemo</button>
        <button onClick={() => setView('ClickCounterDemo')}>ClickCounterDemo</button>
      </nav>
      <main>
        {renderView()}
      </main>
    </div>
  )
}
export default App
