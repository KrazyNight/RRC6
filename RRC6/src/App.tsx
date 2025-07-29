import './App.css';
import TodoTitle from './components/TodoTitle.jsx';
import Todo from './components/Todo.jsx';
import Popup from './components/Popup.jsx';




function App() {

  return (
    <>
    <TodoTitle />
    <Todo task=" Finsih the React Course"
    description="Study and take notes."
    />
    <Todo task=" Finish the Frontend"
    description=" Demonstrate your skills"
    />
    <Todo task=" Get a $100k+ job"
    description=" Work hard to get promoted"
    />
    <Todo task=" Live Strong and enjoy life"
    description=" Start a family"
    />
    {/* <Popup /> */}

    </>
  )
}

export default App
