import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors appointment',
            day: '2021-06-08',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: '2021-06-08',
            reminder: false
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: '2021-06-08',
            reminder: true
        }
    ]
  )

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000 + 1) // random #
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => 
      task.id !== id
    ))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // &&: Short ternary expression without an else statement
  return (
    <div className='container'>
      {/* <Header title="HELLO"/> */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 
      ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      : 'No Tasks to Show'}
    </div>
  );
}

/*
class App extends React.Component {
  render() {
    return <h1>Hello React from a class</h1>
  }
}*/

export default App;
