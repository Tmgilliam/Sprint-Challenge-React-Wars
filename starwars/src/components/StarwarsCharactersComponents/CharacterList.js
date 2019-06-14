import React from "react";
// import "./StarWars.css";

// import StarwarsCharactersComponents from "./StarwarsCharactersComponents";

const CharacterList = (props) => {
    console.log(props)
    console.log(props.CharacterList)
  return (
    <div>
      {props.CharacterList.map(char => (
        // <CharacterList char={starwarsChar} />
        <div>
          <div>{char.name}</div>
          <div>{char.height}</div>
          <div>{char.birth_year}</div>
          <div>{char.created}</div>
          <div>{char.hair_color}</div>
          <div>{char.homeworld}</div>
          <div>{char.mass}</div>
          <div>{char.skin_color}</div>
          <div>{char.gender}</div>
          <div>{char.eye_color}</div>
          {/* <div>{char.films}</div>
          <div>{char.species}</div>
          <div>{char.starships}</div>
          <div>{char.vehicles}</div> */}
          </div>

      ))}
    </div>
  );
};

export default CharacterList;