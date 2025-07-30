import './App.css';
import TodoTitle from './components/TodoTitle.jsx';
import Todo from './components/Todo.jsx';
import Popup from './components/Popup.jsx';
import { useState, useEffect } from 'react';





function App() {
  const [openPopup, setOpenPopup]  = useState(false);

  function togglePopup() {
    setOpenPopup(true)
    console.log('parent notify')
  };

  function closePopup() {
    setOpenPopup(false)
  }

  useEffect(() => {
    console.log('useEffect')
  }, [])

  return (
    <>
    <TodoTitle />
    <Todo task=" Finsih the React Course"
    description="Study and take notes."
    togglePopup={togglePopup}
    />
    <Todo task=" Finish the Frontend"
    description=" Demonstrate your skills"
    togglePopup={togglePopup}
    />
    <Todo task=" Get a $100k+ job"
    description=" Work hard to get promoted"
    togglePopup={togglePopup}
    />
    <Todo task=" Live Strong and enjoy life"
    description=" Start a family"
    togglePopup={togglePopup}
    />
    {openPopup && <Popup closePopup={closePopup} />} 

    </>
  )
}

export default App
