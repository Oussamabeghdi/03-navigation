import "../styles/Home.css";
import { useState, useEffect } from "react";
import {
  fetchTasks,
  addTask,
  deleteTask,
  updateTaskDone,
} from "../services/fetchTasks";
import TaskForm from "../components/TaskFormObject";
import ITask from "../components/interfaces/ITask";
import TaskRow from "../components/TaskRow";

// interface Task {
//   done: boolean;
//   title: string;
// }

// interface TaskProps {
//   tasks: Task;
//   description: string;
// }

const Tasks: React.FC<any> = () => {
  const [listTasks, setListTasks] = useState<ITask[]>([]);
  const [modalDeleteStyle, setModalDeleteStyle] = useState("modalDeleteHidden");
  const [idTaskToDelete, setIdTaskToDelete] = useState("");

  useEffect(() => {
    try {
      getAllTasks();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAllTasks = async () => {
    try {
      let list = await fetchTasks();
      setListTasks(list);
    } catch (error) {
      console.log(error);
    }
  };

  const addTaskInComponentTasks = async (taskToAdd: ITask) => {
    try {
      let task = await addTask(taskToAdd);
      console.log(task);
      await getAllTasks();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTaskInComponentTasks = (idRowTask: string) => {
    try {
      setModalDeleteStyle("modalDeleteVisible");
      setIdTaskToDelete(idRowTask);
    } catch (error) {
      console.log(error);
    }
    //ouvrir modal de validation
  };

  const hideModalDelete = () => {
    setModalDeleteStyle("modalDeleteHidden");
    setIdTaskToDelete("");
  };

  const validateDeleteTaskInDb = async () => {
    try {
      //ajouter une tâche
      let task = await deleteTask(idTaskToDelete);
      console.log(task);
      //afficher la liste
      await getAllTasks();

      hideModalDelete();
    } catch (error) {
      console.log(error);
    }
  };
  const updatedTasksCheckbox = async (taskRow: ITask) => {
    try {
      let task = await updateTaskDone(taskRow);
      console.log(task);
      await getAllTasks();
    } catch (error) {
      console.log(error);
    }
  };
  // const handleCheckTask = (id: string) => {
  //   const updatedTasks = listTasks.map((task) => {
  //     if (task._id === id) {
  //       return { ...task, done: !task.done };
  //     }
  //     return task;
  //   });
  //   setListTasks(updatedTasks);
  // };
  // handleCheckTask={(id: string) => handleCheckTask(id)}
  return (
    <main className="container">
      <div className="main-content">
        <TaskForm
          addTaskInComponentTasks={(taskToAdd: ITask) =>
            addTaskInComponentTasks(taskToAdd)
          }
        />

        {/* <div> {listTasks.map((task:string,_id:number))}</div> */}
        <div className="liste-des-taches-div">
          <h3 className="liste-des-taches-title">Liste des tâches</h3>
          <div>
            {listTasks.map((taskRow: ITask) => {
              return (
                <div key={taskRow._id}>
                  <div>
                    <TaskRow
                      taskRow={taskRow}
                      updatedTasksCheckbox={(taskRow: ITask) =>
                        updatedTasksCheckbox(taskRow)
                      }
                      deleteTaskInComponentTasks={(id: string) =>
                        deleteTaskInComponentTasks(id)
                      }
                    />
                  </div>
                  <div id="supprimer-task" className={modalDeleteStyle}>
                    <button className="close" onClick={() => hideModalDelete()}>
                      &times;
                    </button>

                    <div id="popup">
                      <div id="title">
                        {`Etes-vous sûr de vouloir supprimer cette tâche : ${taskRow.title}  ?`}
                      </div>
                      <div id="validate-clear-btn">
                        <button
                          id="buttonannuler"
                          onClick={() => hideModalDelete()}
                        >
                          <div id="text">
                            <div>Annuler</div>
                          </div>
                        </button>
                        <button
                          id="buttonsvalider"
                          onClick={() => validateDeleteTaskInDb()}
                        >
                          <div id="text2">
                            <div>Valider</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Tasks;
