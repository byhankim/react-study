import { useState, useEffect } from 'react' // useEffect: deals w/ side effects -> need 4  load on pageload
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  
  // useEffect: Deals w/ side effects -> usually when you want to load sth on pageload
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, []) // []: dependency

  // fetch Tasks from json server
  const fetchTasks = async () => {
    // fetch returns a promise, thus use AWAIT
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // reminder
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
 

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json() // new task that's just added(created)
    console.log(data)
    setTasks([...tasks, data])


    // const id = Math.floor(Math.random() * 1000 + 1) // random #
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = async (id) => {
    // simple delete request
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    // console.log('delete', id)
    setTasks(tasks.filter((task) => 
      task.id !== id
    ))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const tasksToToggle = await fetchTask(id)
    const updTask = {...tasksToToggle, reminder: !tasksToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updTask)
    })

    // updated task
    const data = await res.json()

    console.log(data)

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  // &&: Short ternary expression without an else statement
  return (
    <Router>
      <div className='container'>
        {/* <Header title="HELLO"/> */}
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        
      <Route path='/' exact render={ (props) => (
        <>
          {showAddTask && <AddTask onAdd={ addTask }/>}
          {tasks.length > 0 
          ? <Tasks tasks={tasks} onDelete={ deleteTask } onToggle={toggleReminder}/>
          : 'No Tasks to Show'}
        </>
      ) } />
        <Route path='/about' component={ About }/>
        <Footer />
      </div>
    </Router>
  );
}

/*
class App extends React.Component {
  render() {
    return <h1>Hello React from a class</h1>
  }
}*/

export default App;
