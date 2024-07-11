import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Task.css";
import ITask from "./interfaces/ITask";
import { useState } from "react";

// interface Task {
//   done: boolean;
//   title: string;
// }

// interface TaskRowProps {
//   tasks: Task;
//   description: string;
// }
type Props = {
  taskRow: ITask;
  deleteTaskInComponentTasks: (id: string) => void;
  // handleCheckTask: (id: string) => void;
  updatedTasksCheckbox: (taskRow: ITask) => void;
  setTaskRow?: React.Dispatch<React.SetStateAction<string>>;
  updateTaskRow: (isModified: boolean, taskRow: ITask) => void;
};
const TaskRow: React.FC<Props> = (props: Props) => {
  const [taskRow, setTaskRow] = useState(props.taskRow);

  const updatedTasksCheckbox = async (doneValue: boolean) => {
    const updatedTaskRow = { ...taskRow, done: doneValue };
    setTaskRow(updatedTaskRow);
    props.updatedTasksCheckbox(updatedTaskRow);
  };

  // const TaskRow: React.FC<TaskRowProps> = ({ task, index, onToggleDone, description }) => {
  const deleteTaskInComponent = async () => {
    props.deleteTaskInComponentTasks(taskRow._id!);
  };
  // const handleClickCheckTask = async () => {
  //   props.handleCheckTask(taskRow._id!);
  // };

  const updateTaskRow = async () => {
    props.updateTaskRow(true, taskRow);
  };

  return (
    <div style={{ width: "700px" }} className="tasks-list-container">
      <ul className="tasks-list">
        <li style={{ display: "flex", padding: "20px 50px" }} className="tasks">
          <div style={{ padding: "0 10px" }} className="div-in-list">
            <input
              id="done"
              type="checkbox"
              checked={taskRow.done ? true : false}
              // onChange={handleClickCheckTask}
              onChange={(event) => updatedTasksCheckbox(event.target.checked)}
            />
          </div>
          {/* <div className="div-in-list">
            <span className={taskRow.done ? "done" : ""}>{taskRow._id}</span>
          </div> */}
          <div className="div-in-list">
            <span className={taskRow.done ? "done" : ""}>{`Titre : ${taskRow.title}`}</span>
          </div>
          <div className="div-in-list">
            <span className={taskRow.done ? "done" : ""}>{taskRow.description}</span>
          </div>
          <div className="div-in-list-date">
            <span className={taskRow.done ? "done" : ""}>{`Date: ${taskRow.date}`}</span>
          </div>
          <div className="div-in-list-date">
            <span className={taskRow.done ? "done" : ""}>{`Priorité : ${taskRow.priority}`}</span>
          </div>

          <div className="div-in-list-trash">
            <FontAwesomeIcon
              onClick={deleteTaskInComponent}
              className="trash"
              icon="trash"
              size="2x"
            />
          </div>
          <div className="div-in-list">
            <button onClick={() => updateTaskRow()}>Modifier</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TaskRow;
