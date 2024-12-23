import './App.css'
import Chess from './components/Chess'
import Counter from './components/Counter'

const App = () => (
    <div className='space-y-10'>
        <h1>Hello from Remote!</h1>
        <Counter  />
        <Chess />
    </div>
)

export default App
