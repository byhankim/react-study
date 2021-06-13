import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => { // catch the prop
    // ^ props.tasks OR destructured {tasks}

    return (
        // state is immutable! only use setTasks
        // tasks.push({task}) <- CAN'T!!!!
        // setTasks([...tasks, {newTask}]) <- YES!!
        <>
          {tasks.map((task, index) => (
            <Task 
                key={index} 
                task={task} 
                onDelete={onDelete} 
                onToggle={onToggle}
            />
          ))}   
        </>
    )
}

export default Tasks
