import React from "react";
import "../styles/Home.css";
import homeLogo from "../images/3643769-building-home-house-main-menu-start_113416.png";
// import Form from "../components/Form";
const Home: React.FC = () => {
  return (
    <div className="container">
      {/* <aside className="sidebar">
        <h2>Sidebar</h2>
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </aside> */}
      <main className="main-content">
        <h3>Accueil</h3>
        <img src={homeLogo} alt="" />
        {/* <Form /> */}
        {/* <p>Ceci est une page d'accueil avec une sidebar fixe à gauche.</p>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nihil quas, aliquam nam maiores necessitatibus odio id obcaecati.
            Harum ipsum explicabo voluptatem ea accusamus voluptas itaque ab,
            enim repudiandae nam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            necessitatibus facilis alias dolorem neque cumque minus, temporibus
            numquam sed delectus iure labore quis. Aut adipisci voluptas
            eligendi deserunt dolore iusto. Voluptas veritatis, temporibus
            dolorem commodi quo voluptatibus ut? Blanditiis veniam maxime,
            perferendis explicabo voluptates facilis voluptatem rerum natus,
            quidem a pariatur sequi hic deleniti soluta voluptas facere earum
            veritatis voluptatibus! Provident corporis autem beatae sequi iure
            itaque esse modi in? Accusamus, iure. Totam quis sint dolor esse
            debitis eligendi nesciunt, corporis dignissimos illo, libero natus
            atque commodi tempore? Similique, voluptatum? Earum facere nulla
            illo similique praesentium. Doloribus ad, quam ducimus odio
            repudiandae est perspiciatis quod soluta sunt enim sed velit aliquid
            natus vel autem labore animi minus hic vitae mollitia!
          </p>
        </div> */}
      </main>
    </div>
    // <div className="container mx-auto mt-4">
    //   <h1 className="text-3xl font-bold">Accueil</h1>
    //   <p className="mt-2">Bienvenue sur la page d'accueil !</p>
    // </div>
  );
};

export default Home;
