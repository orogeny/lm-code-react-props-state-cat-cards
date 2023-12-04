import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Cat from "./data/cat";
import { useState } from "react";
import CatCard from "./components/cat_card";
import { catData } from "./data/cat_data";

function App(): JSX.Element {
  const [cats] = useState<Array<Cat>>(catData);

  return (
    <>
      <Navbar />
      <Header catCount={cats.length} />

      <main>
        <div className="cards__wrapper">
          {cats.map((c, index) => (
            <CatCard
              key={c.id}
              name={c.name}
              species={c.species}
              favFoods={c.favFoods}
              birthYear={c.birthYear}
              catIndex={index}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
