import "../styles/Form.css";
import { useState, useEffect } from "react";
import ITask from "./interfaces/ITask";

type Props = {
  task: ITask;
  addTaskInComponentTasks: (taskToAdd: ITask, isModified: boolean) => void;
  isModified: boolean;
};

const TaskFormObject: React.FC<Props> = ({ task, addTaskInComponentTasks, isModified }) => {
  const [titleVisible, setTitleVisible] = useState<boolean>(false);
  const [dateVisible, setDateVisible] = useState<boolean>(false);

  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [dateTask, setDateTask] = useState("");
  //   const [done, setDone] = useState(false);

  //on declare un usestate de type ITask
  // Assurez-vous que les valeurs initiales de vos entrées sont toujours définies, même si elles sont vides.

  // Utiliser les Valeurs Initiales Correctement
  // Vérifiez que toutes les valeurs dans taskForm sont définies au moment où le composant est rendu pour éviter qu'elles ne soient undefined.
  const [taskForm, setTaskForm] = useState<ITask>({
    title: task.title || "",
    description: task.description || "",
    date: task.date || "",
    done: task.done || false,
    priority: task.priority || "oui",
  });
  const [showButtonCreateOrModify, setShowButtonCreateOrModify] = useState(
    isModified ? "Modifier" : "Créer"
  );
  enum FormFields {
    StringField,
    TextAreaField,
    DateField,
    CheckBoxField,
    RadioButtonField,
  }

  useEffect(() => {
    //si isModfied = false alors c'est une creation sinon c'est une modification
    //state pour les champs
    if (!isModified) {
      setTaskForm({ title: "", description: "", date: "", done: false, priority: "oui" });
      setShowButtonCreateOrModify("Créer");
    } else {
      setTaskForm(task);
      setShowButtonCreateOrModify("Modifier");
    }
  }, [isModified]);
  useEffect(() => {
    //state pour les champs
    if (isModified) {
      setTaskForm(task);
      //setShowButtonCreateOrModify("Modifier")
    }
  }, [task._id]);

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
    if (typeField === FormFields.RadioButtonField) {
      setTaskForm({ ...taskForm, priority: value as string });
    }
  }
  function clearForm(): void {
    setTaskForm({ title: "", date: "", description: "", done: false, priority: "oui" });
    setTitleVisible(false);

    setDateVisible(false);
  }

  function modifyTask(event: any) {
    event.preventDefault();
    // setTitleVisible("titleErrorHidden");
    // setDateVisible("dateErrorHidden");
    setTitleVisible(false);
    setDateVisible(false);
    let validate = true;
    //vérifier que le title n'est pas vide
    if (taskForm.title === "") {
      //si erreur l'intitulé montrer l'erreur
      // setTitleVisible("titleErrorVisible");
      setTitleVisible(true);
      validate = false;
    }

    if (taskForm.date === "") {
      //si erreur date montrer l'erreur
      // setDateVisible("dateErrorVisible");
      setDateVisible(true);
      validate = false;
    }
    if (validate) {
      addTaskInComponentTasks(taskForm, isModified);
    }
    return validate;
  }
  return (
    <form onSubmit={modifyTask}>
      <div className="inputs-textare">
        <input
          type="text"
          value={taskForm.title}
          onChange={(event) => handleChange(event.target.value, FormFields.StringField)}
          placeholder="Title *"
        />
        <div className={titleVisible ? "titleErrorVisible" : "titleErrorHidden"}>
          Veuillez remplir le champ
        </div>
      </div>
      <div className="inputs-textare">
        <textarea
          id="story"
          name="story"
          value={taskForm.description}
          rows={7}
          cols={33}
          placeholder="Description...."
          onChange={(event) => handleChange(event.target.value, FormFields.TextAreaField)}
        ></textarea>
        {/* <div className={titleVisible}>Veuillez remplir le champ</div> */}
      </div>
      <div className="inputs-textare">
        <input
          className="input-date"
          type="date"
          onChange={(event) => handleChange(event.target.value, FormFields.DateField)}
          value={taskForm.date}
          name="date"
          id="date"
        />
        <div className={dateVisible ? "dateErrorVisible" : "dateErrorHidden"}>
          Veuillez entrer une date
        </div>
      </div>
      <div className="div-input-check">
        <input
          className="input-check"
          type="checkbox"
          name=""
          id=""
          checked={taskForm.done}
          onChange={(event) => handleChange(event.target.checked, FormFields.CheckBoxField)}
        />
        <h3>Done</h3>
      </div>
      <h2>Priorité</h2>
      <div className="div-input-check">
        <input
          type="radio"
          id="oui"
          name="priorité"
          value="Oui"
          checked={taskForm.priority === "Oui"}
          onClick={(event) =>
            handleChange((event.target as HTMLInputElement).value, FormFields.RadioButtonField)
          }
        />
        <label htmlFor="oui">Oui</label>

        <input
          type="radio"
          id="non"
          name="priorité"
          value="Non"
          checked={taskForm.priority === "Non"}
          onClick={(event) =>
            handleChange((event.target as HTMLInputElement).value, FormFields.RadioButtonField)
          }
        />
        <label htmlFor="non">Non</label>
      </div>
      <div className="buttonsForm-tasks">
        <input
          className="input-validate"
          type="submit"
          value={showButtonCreateOrModify}
          // onChange={modifyTask}
          onClick={(event) => modifyTask(event)}
        />
        <button type="button" onClick={() => clearForm()}>
          Annuler
        </button>
      </div>
    </form>
  );
};

export default TaskFormObject;
