import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Cat from "./data/cat";
import { useState } from "react";

const initialCats = [
  {
    name: "Little Miss Purrfect",
    species: "Cat",
    favFoods: ["wet food", "dry food"],
    birthYear: 2016,
  },
  {
    name: "Mr Gwumpy",
    species: "Cat",
    favFoods: ["caviar"],
    birthYear: 2016,
  },
  {
    name: "Dopey",
    species: "Cat",
    favFoods: ["bugs"],
    birthYear: 2018,
  },
  {
    name: "Jumpy",
    species: "Scaredy Cat",
    favFoods: ["not cucumbers!"],
    birthYear: 2008,
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
  },
  {
    name: "Cindy Clawford",
    species: "Cat",
    favFoods: ["mice"],
    birthYear: 2012,
  },
  {
    name: "Katy Purry",
    species: "Cat",
    favFoods: ["cigarettes", "coffee"],
    birthYear: 2015,
  },
  {
    name: "Dr. Von Belly-Rub",
    species: "Cat",
    favFoods: ["salt"],
    birthYear: 2020,
  },
  {
    name: "Blobby",
    species: "Bird?",
    favFoods: ["your soul"],
    birthYear: 2020,
  },
  {
    name: "El Taco",
    species: "Cat",
    favFoods: ["tequila", "bar snax"],
    birthYear: 1995,
  },
  {
    name: "Nibbles",
    species: "Hungry Cat",
    favFoods: ["blankets", "feet", "tinsel"],
    birthYear: 2003,
  },
  {
    name: "BoopySnoot",
    species: "Tiny Cat",
    favFoods: ["milk"],
    birthYear: 2021,
  },
];

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(initialCats);

  return (
    <>
      <Navbar />
      <Header />

      <main>
        <div className="cards__wrapper">
          <div className="card">
            <h3 className="card__text card__header">Cindy Clawford</h3>
            <img
              className="card__image"
              src="someImageUrlHere"
              alt="A cute tabby kitten"
            ></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Mice</p>
            <p className="card__text">Birth Year: 2012</p>
          </div>

          <div className="card">
            <h3 className="card__text card__header">Little Miss Purrfect</h3>
            <img
              className="card__image"
              src="someImageUrlHere"
              alt="A gray fluffy kitten"
            ></img>
            <p className="card__text">Species: Cat</p>
            <p className="card__text">Favourite Food(s): Wet food, dry food</p>
            <p className="card__text">Birth Year: 2016</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
