import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <a className='btn btn-success me-1 ms-1' onClick={() => props.completeTask(props.id)}> <DoneIcon/> </a>
      <a className='btn btn-danger' onClick={() => props.deleteTask(props.id)}> <DeleteIcon/> </a>
    </div>
  );
};