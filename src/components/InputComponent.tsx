// import React, { Dispatch, SetStateAction } from "react";

// // Définir les types des propriétés
// interface InputComponentProps {
//   input: string;
//   setInput: Dispatch<SetStateAction<string>>;
// }

// // Définir le composant fonctionnel avec les types des propriétés
// const InputComponent: React.FC<InputComponentProps> = ({ input, setInput }) => {
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={input} onChange={handleChange} />
//     </div>
//   );
// };

// export default InputComponent;
