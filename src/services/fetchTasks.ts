// // import ITask from "../components/interfaces/ITask";
// import { useEffect, useState } from "react";
// import axios from "axios";
// // export const fetchTasks = async () => {
// //   const response = await fetch("http://localhost:5000/tasks");
// //   const tasks = await response.json();
// //   return tasks;
// // };
// function tasksList() {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     // Je déclare la focntion qui fait la requête

//     const fetchData = async () => {
//       // Ma requête peut échouer donc je la place dans un try catch

//       try {
//         const response = await axios.get(
//           // "https://site--project-beghdi--s2sr66nrlvyk.code.run"
//           "http://localhost:5000/tasks"
//         );
//         console.log(response.data);
//         // Je stocke le résultat dans data

//         setData(response.data);
//       } catch (error: any) {
//         console.log(error.message);
//       }
//     };
//     // J'appelle ma fonction

//     fetchData();
//   }, []);
// }

// export default tasksList;
//code du fetchTasks.ts

import ITask from "../components/interfaces/ITask";

const urlServer: string = import.meta.env.VITE_APP_URL_BACKEND as string;
// const urlServer: string = "http://localhost:5001";
//  Récupérer tous les tâches
export const fetchTasks = async () => {
  const response = await fetch(urlServer + "/tasks", {
    method: "GET",
  });
  const jsonData = await response.json();
  return jsonData;
};

// / Ajouter une tâche /
export const addTask = async (task: ITask) => {
  const response = await fetch(urlServer + "/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...task }),
  });

  const newTask = await response.json();
  return newTask;
};

// / Modifier une tâche /
export const editTask = async (task: ITask) => {
  const response = await fetch(urlServer + "/task/" + task._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...task }),
  });

  const updatedTask = await response.json();
  return updatedTask;
};
export const updateTaskDone = async (task: ITask) => {
  const response = await fetch(urlServer + "/updatetaskdone", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...task }),
  });

  const updatedTask = await response.json();
  return updatedTask;
};

// / Supprimer une tâche /
export const deleteTask = async (id: string) => {
  const response = await fetch(urlServer + "/removetask/" + id, {
    method: "DELETE",
  });
  const messageFromServer = await response.json();

  return messageFromServer;
};

// / Rechercher une tâche par id */
export const getTaskById = async (id: string) => {
  const response = await fetch(urlServer + "/gettask/" + id, {
    method: "GET",
  });
  const jsonTask = await response.json();

  return jsonTask;
};
