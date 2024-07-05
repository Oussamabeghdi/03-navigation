// import { useState } from "react";

// import "../styles/Form.css";

// const Form: React.FC = () => {
//   const [titleVisible, setTitleVisible] = useState("titleErrorHidden");
//   const [dateVisible, setDateVisible] = useState("dateErrorHidden");

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dateTask, setDateTask] = useState("");

//   const [done, setDone] = useState(false);

//   enum FormFields {
//     StringField,
//     TextAreaField,
//     DateField,
//     CheckBoxField,
//   }
//   function handleChange<T>(value: T, typeField: number): void {
//     if (typeField === FormFields.StringField) {
//       setTitle(value as string);
//     }
//     if (typeField === FormFields.TextAreaField) {
//       setDescription(value as string);
//     }
//     if (typeField === FormFields.DateField) {
//       setDateTask(value as string);
//     }
//     if (typeField === FormFields.CheckBoxField) {
//       setDone(value as boolean);
//     }
//   }

//   function modifyTask(event: any) {
//     event.preventDefault();
//     setTitleVisible("titleErrorHidden");
//     setTitleVisible("titleErrorVisible");
//     let validate = true;
//     //vérifier que le title n'est pas vide
//     if (title === "") {
//       //si erreur l'intitulé montrer l'erreur
//       setTitleVisible("titleErrorVisible");
//       validate = false;
//     }

//     if (dateTask === "") {
//       //si erreur date montrer l'erreur
//       setDateVisible("dateErrorVisible");
//       validate = false;
//     }

//     return validate;
//   }
//   return (
//     <form onSubmit={modifyTask}>
//       <div className="inputs-textare">
//         <input
//           type="text"
//           value={title}
//           onChange={(event) =>
//             handleChange(event.target.value, FormFields.StringField)
//           }
//           placeholder="Title *"
//         />
//         <div className={titleVisible}>Veuillez remplir le champ</div>
//       </div>

//       <div className="inputs-textare">
//         <textarea
//           id="story"
//           name="story"
//           value={description}
//           rows={7}
//           cols={33}
//           placeholder="Description...."
//           onChange={(event) =>
//             handleChange(event.target.value, FormFields.TextAreaField)
//           }
//         ></textarea>
//         <div className={titleVisible}>Veuillez remplir le champ</div>
//       </div>

//       <div className="inputs-textare">
//         <input
//           className="input-date"
//           type="date"
//           onChange={(event) =>
//             handleChange(event.target.value, FormFields.DateField)
//           }
//           value={dateTask}
//           name="date"
//           id="date"
//         />
//         <div className={dateVisible}>Veuillez entrer une date</div>
//       </div>

//       <div className="div-input-check">
//         <input
//           className="input-check"
//           type="checkbox"
//           name=""
//           id=""
//           checked={done}
//           onChange={(event) =>
//             handleChange(event.target.checked, FormFields.CheckBoxField)
//           }
//         />
//       </div>
//       <div className="buttonsForm-tasks">
//         <button>Valider</button>
//         <button>Annuler</button>
//       </div>
//     </form>
//   );
// };

// export default Form;
