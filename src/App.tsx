import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import PetCard from "./components/pet_card";
import { PetForm } from "./components/pet_form";
import { Pet } from "./data/pet";
import { catData } from "./data/cat_data";
import { dogData } from "./data/dog_data";

function App(): JSX.Element {
  const [pets, setPets] = useState<Array<Pet>>(catData.concat(dogData));

  const catCount = pets.filter((p) => p.species.toLowerCase() === "cat").length;
  const dogCount = pets.length - catCount;

  const addPet = (newPet: Pet) => setPets((prev) => prev.concat(newPet));

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <div className="cards__wrapper">
          {pets.map((c) => (
            <PetCard
              key={c.id}
              id={c.id}
              name={c.name}
              species={c.species}
              favFoods={c.favFoods}
              birthYear={c.birthYear}
            />
          ))}
        </div>

        <PetForm addPet={addPet} />
      </main>

      <Footer />
    </>
  );
}

export default App;
