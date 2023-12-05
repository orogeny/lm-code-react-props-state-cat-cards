import { catImages } from "../data/cat_data";
import PetImage from "./pet_image";

interface PetCardProps {
  id: string;
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
}

function PetCard({ id, name, species, favFoods, birthYear }: PetCardProps) {
  const petImage = catImages.find((img) => img.id === id);

  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods.join(", ")}</p>
      <p className="card__text">Birth Year: {birthYear}</p>

      {petImage && (
        <PetImage
          image={petImage.image}
          altText={petImage.altText}
          licenceType={petImage.licenceType}
          licenceUrl={petImage.licenceUrl}
          attributionName={petImage.attributionName}
          attributionUrl={petImage.attributionUrl}
        />
      )}
    </div>
  );
}

export default PetCard;
