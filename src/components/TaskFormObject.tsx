import "../styles/Form.css";
import { useState } from "react";
import ITask from "./interfaces/ITask";

const TaskFormObject: React.FC<any> = ({ addTaskInComponentTasks }) => {
  const [titleVisible, setTitleVisible] = useState("titleErrorHidden");
  const [dateVisible, setDateVisible] = useState("dateErrorHidden");

  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [dateTask, setDateTask] = useState("");
  //   const [done, setDone] = useState(false);

  //on declare un usestate de type ITask
  const [taskForm, setTaskForm] = useState<ITask>({ date: "", title: "" });

  enum FormFields {
    StringField,
    TextAreaField,
    DateField,
    CheckBoxField,
  }
  function handleChange<T>(value: T, typeField: number): void {
    if (typeField === FormFields.StringField) {
      //on recopie tout ce qui a dans taskForm puis on remplace le title dans le taskForm
      //on specifie le type de la valeur en string car nous avons donné un type generique T dans les parametre de la fonction
      setTaskForm({ ...taskForm, title: value as string });
    }
    if (typeField === FormFields.TextAreaField) {
      setTaskForm({ ...taskForm, description: value as string });
    }
    if (typeField === FormFields.DateField) {
      setTaskForm({ ...taskForm, date: value as string });
    }
    if (typeField === FormFields.CheckBoxField) {
      setTaskForm({ ...taskForm, done: value as boolean });
    }
  }

  function modifyTask(event: any) {
    event.preventDefault();
    setTitleVisible("titleErrorHidden");
    setDateVisible("dateErrorHidden");
    let validate = true;
    //vérifier que le title n'est pas vide
    if (taskForm.title === "") {
      //si erreur l'intitulé montrer l'erreur
      setTitleVisible("titleErrorVisible");
      validate = false;
    }

    if (taskForm.date === "") {
      //si erreur date montrer l'erreur
      setDateVisible("dateErrorVisible");
      validate = false;
    }
    if (validate) {
      addTaskInComponentTasks(taskForm);
    }
    return validate;
  }
  return (
    <form onSubmit={modifyTask}>
      <div className="inputs-textare">
        <input
          type="text"
          value={taskForm.title}
          onChange={(event) =>
            handleChange(event.target.value, FormFields.StringField)
          }
          placeholder="Title *"
        />
        <div className={titleVisible}>Veuillez remplir le champ</div>
      </div>

      <div className="inputs-textare">
        <textarea
          id="story"
          name="story"
          value={taskForm.description}
          rows={7}
          cols={33}
          placeholder="Description...."
          onChange={(event) =>
            handleChange(event.target.value, FormFields.TextAreaField)
          }
        ></textarea>
        {/* <div className={titleVisible}>Veuillez remplir le champ</div> */}
      </div>

      <div className="inputs-textare">
        <input
          className="input-date"
          type="date"
          onChange={(event) =>
            handleChange(event.target.value, FormFields.DateField)
          }
          value={taskForm.date}
          name="date"
          id="date"
        />
        <div className={dateVisible}>Veuillez entrer une date</div>
      </div>

      <div className="div-input-check">
        <input
          className="input-check"
          type="checkbox"
          name=""
          id=""
          checked={taskForm.done}
          onChange={(event) =>
            handleChange(event.target.checked, FormFields.CheckBoxField)
          }
        />
      </div>
      <div className="buttonsForm-tasks">
        <input className="input-validate" type="submit" value="Valider" />
        <button>Annuler</button>
      </div>
    </form>
  );
};

export default TaskFormObject;
