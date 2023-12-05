import { v4 as uuidv4 } from "uuid";
import { Pet } from "./pet";

const dogs: Array<Omit<Pet, "id">> = [
  {
    name: "Floofus",
    species: "Puppy",
    favFoods: ["marshmallows"],
    birthYear: 2020,
  },
  {
    name: "Doofus",
    species: "Doggo",
    favFoods: ["porridge, dog food"],
    birthYear: 2010,
  },
  {
    name: "Goofus",
    species: "Dog",
    favFoods: ["bouncy balls"],
    birthYear: 2015,
  },
];

const dogData: Array<Pet> = dogs.map((dog) => ({ id: uuidv4(), ...dog }));

export { dogData };
