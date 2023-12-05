import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Pet } from "../data/pet";

type PetFormProps = {
  addPet: (p: Pet) => void;
};

function PetForm({ addPet }: PetFormProps) {
  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();

    const target = ev.target as typeof ev.target & {
      name: { value: string };
      species: { value: string };
      favFoods: { value: string };
      birthYear: { value: number };
    };

    const name = target.name.value;
    const species = target.species.value;
    const favFoods = target.favFoods.value.split("\n");
    const birthYear = target.birthYear.value;

    const pet = {
      id: uuidv4(),
      name,
      species,
      favFoods,
      birthYear,
    };

    addPet(pet);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pet name:
        <input type="text" id="name" />
      </label>

      <label>
        Species:
        <input type="text" id="species" />
      </label>

      <label>
        Favourite Food(s):
        <textarea id="favFoods" rows={4} cols={30} />
      </label>

      <label>
        Birth Year:
        <input type="number" id="birthYear" />
      </label>

      <button>Add</button>
    </form>
  );
}

export { PetForm };
