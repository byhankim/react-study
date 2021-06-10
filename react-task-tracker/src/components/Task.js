import { FaTimes } from 'react-icons/fa'
// svg 아이콘 직접 사용 
// 1. svg -> img tag
// 2. svg as component in react

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} >
            <h3>
                {task.text}
                <FaTimes style={{color: 'red', cursor: 'pointer', onDelete: 'onDelete'}}
                onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
