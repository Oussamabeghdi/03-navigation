import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import InputComponent from "./components/InputComponent";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faListAlt);

interface Task {
  done: boolean;
  title: string;
}

// interface TaskProps {
//   tasks: Task;
//   description: string;
// }

const App: React.FC = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task>({ done: false, title: "" }); // Initialisation avec un objet Task
  const [description, setDescription] = useState("");

  // const [input, setInput] = useState<string>("");

  // const handleChange = (event) => {
  //   setInput(event.target.value);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <>
      <Router>
        <div className="App-wrapper">
          <Sidebar onClickSideBar={(title: string) => setTitle(title)} />
          <div>
            <Header title={title} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/tasks"
                element={
                  <Tasks
                    tasks={tasks}
                    setTasks={setTasks}
                    description={description}
                    setDescription={setDescription}
                  />
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
