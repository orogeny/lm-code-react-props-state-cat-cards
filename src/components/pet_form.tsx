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
      pet_name: { value: string };
      species: { value: string };
      fav_foods: { value: string };
      birth_year: { value: number };
    };

    const name = target.pet_name.value;
    const species = target.species.value;
    const favFoods = target.fav_foods.value.split("\n");
    const birthYear = target.birth_year.value;

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
    <form className="pet-form" onSubmit={handleSubmit}>
      <h3 className="pet-form__header pet-form__text">Add a new pet</h3>

      <div className="pet-form__container">
        <div className="pet-form__entry">
          <label className="pet-form__label" htmlFor="pet_name">
            Name:
          </label>
          <input type="text" id="pet_name" />
        </div>

        <div className="pet-form__entry">
          <label className="pet-form__label" htmlFor="species">
            Species:
          </label>
          <input type="text" id="species" />
        </div>

        <div className="pet-form__entry">
          <label className="pet-form__label" htmlFor="birth_year">
            Birth Year:
          </label>
          <input type="number" id="birth_year" />
        </div>

        <div className="pet-form__entry">
          <label className="pet-form__label">Favourite Food(s):</label>
          <textarea id="favFoods" rows={4} cols={30} />
        </div>
      </div>

      <button className="pet-form__button">Add</button>
    </form>
  );
}

export { PetForm };
