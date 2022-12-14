import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./form";

// const showMessage = () => {
//   console.log("Hello Event!");
// };

// const clickOnPlanet = (name) => {
//   console.log(`Clicou no planeta ${name}`);
// };

// Renderização condicional
// const Planets = () => {
//   return (
//     <Fragment>
//       <h3>Planet List</h3>
//       {/* <button onClick={showMessage}>Message</button> */}
//       <hr />
//       <Planet
//         name="Mercúrio"
//         description="Mercúrio é um planeta do sistema solar, que pertence à Via Láctea."
//         link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
//         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
//         // clickOnPlanet={clickOnPlanet}
//         title_with_underline={false}
//         grayScale={true}
//       />
//       <Planet
//         name="Plutão"
//         // description="Plutão é um planeta anão do sistema solar, que pertence à Via Láctea."
//         link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
//         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
//         // clickOnPlanet={clickOnPlanet}
//         title_with_underline={true}
//         grayScale={false}
//       />
//     </Fragment>
//   );
// };

// // Aula lifecycle
// async function getPlanets() {
//   let response = await fetch("http://localhost:3000/api/planets.json");
//   let data = await response.json();
//   return data;
// }

// // Classes com estado
// class Planets extends React.Component {
//   constructor(props) {
//     super(props);

// Aula estados
//   this.state = {
//     planets: [
//       {
//         name: "Mercúrio",
//         description:
//           "Mercúrio é um planeta do sistema solar, que pertence à Via Láctea.",
//         link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
//         img_url:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
//       },
//       {
//         name: "Plutão",
//         description:
//           "Plutão é um planeta anão do sistema solar, que pertence à Via Láctea.",
//         link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
//         img_url:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
//       },
//     ],
//   };
// }

// Aula lifecycle
//     this.state = {
//       planets: [],
//     };
//   }

//   componentDidMount() {
//     getPlanets().then((data) => {
//       this.setState((state) => ({
//         planets: data["planets"],
//       }));
//     });
//   }

//   removeLast = () => {
//     let new_planets = [...this.state.planets];
//     new_planets.pop();
//     this.setState((state) => ({
//       planets: new_planets,
//     }));
//   };

//   duplicateLastPlanet = () => {
//     let last_planet = this.state.planets[this.state.planets.length - 1];
//     this.setState((state) => ({
//       planets: [...this.state.planets, last_planet],
//     }));
//   };

//   render() {
//     return (
//       <Fragment>
//         <h1>Planet List</h1>
//         <button onClick={this.removeLast}>Remove last</button>
//         <button onClick={this.duplicateLastPlanet}>Duplicate last</button>
//         <hr />
//         {/* <Planet
//           name={this.state.planets[0].name}
//           description={this.state.planets[0].description}
//           link={this.state.planets[0].link}
//           img_url={this.state.planets[0].img_url}
//         />
//         <Planet
//           name={this.state.planets[1].name}
//           description={this.state.planets[1].description}
//           link={this.state.planets[1].link}
//           img_url={this.state.planets[1].img_url}
//         /> */}
//         {/* Outra forma */}
//         {this.state.planets.map((planet, i) => (
//           <Planet
//             key={i}
//             id={planet.id}
//             name={planet.name}
//             description={planet.description}
//             link={planet.link}
//             img_url={planet.img_url}
//           />
//         ))}
//       </Fragment>
//     );
//   }
// }

// export default Planets;

//Refatorando state e lifecycle com hooks
// async function getPlanets() {
//   let response = await fetch("http://localhost:3000/api/planets.json");
//   let data = await response.json();
//   return data;
// }

// const Planets = () => {
//   const [planets, setPlanets] = useState([]);

//   useEffect(() => {
//     getPlanets().then((data) => {
//       setPlanets(data["planets"]);
//     });
//   }, []); // As chaves servem para indicar que o useEffect só deve
//   // renderizar no inicio, na montagem. Se quiser re-renderizar sempre
//   // não deve-se passar este parâmetro vazio

//   const removeLast = () => {
//     let new_planets = [...planets];
//     new_planets.pop();
//     setPlanets(new_planets);
//   };

//   const duplicateLastPlanet = () => {
//     let last_planet = planets[planets.length - 1];
//     setPlanets([...planets, last_planet]);
//   };

//   return (
//     <Fragment>
//       <h1>Planet List</h1>
//       <button onClick={removeLast}>Remove last</button>
//       <button onClick={duplicateLastPlanet}>Duplicate last</button>
//       <hr />
//       {planets.map((planet, i) => (
//         <Planet
//           key={i}
//           id={planet.id}
//           name={planet.name}
//           description={planet.description}
//           link={planet.link}
//           img_url={planet.img_url}
//         />
//       ))}
//     </Fragment>
//   );
// };

// export default Planets;

//Criando um form controlado
// async function getPlanets() {
//   let response = await fetch("http://localhost:3000/api/planets.json");
//   let data = await response.json();
//   return data;
// }

// const Planets = () => {
//   const [planets, setPlanets] = useState([]);

//   useEffect(() => {
//     getPlanets().then((data) => {
//       setPlanets(data["planets"]);
//     });
//   }, []);

//   const addPlanet = (newPlanet) => {
//     setPlanets([...planets, newPlanet]);
//   };

//   return (
//     <Fragment>
//       <h1>Planet List</h1>
//       <hr />
//       <Form addPlanet={addPlanet} />
//       <hr />
//       {planets.map((planet, i) => (
//         <Planet
//           key={i}
//           id={planet.id}
//           name={planet.name}
//           description={planet.description}
//           link={planet.link}
//           img_url={planet.img_url}
//         />
//       ))}
//     </Fragment>
//   );
// };

// export default Planets;

// Navegando entre telas
import { Link, redirect } from "react-router-dom";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [redirection, setRedirection] = useState([]);

  useEffect(() => {
    getPlanets().then(
      (data) => {
        setPlanets(data["planets"]);
      },
      (error) => {
        return redirect("/erro");
      }
    );
  }, []);

  const addPlanet = (newPlanet) => {
    setPlanets([...planets, newPlanet]);
  };

  return (
    <Fragment>
      <h1>Planet List</h1>
      <label>
        <Link to={`/exemplo`}>Página de exemplo</Link>
      </label>
      <label> | </label>
      <label>
        <Link to={`/teste`}>Página de teste</Link>
      </label>
      <label> | </label>
      <label>
        <Link to={`/welcome`}>Página de boas vindas</Link>
      </label>
      <hr />
      <Form addPlanet={addPlanet} />
      <hr />
      {planets.map((planet, i) => (
        <Planet
          key={i}
          id={planet.id}
          name={planet.name}
          description={planet.description}
          link={planet.link}
          img_url={planet.img_url}
        />
      ))}
    </Fragment>
  );
};

export default Planets;
