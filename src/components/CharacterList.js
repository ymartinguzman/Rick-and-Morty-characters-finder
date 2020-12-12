import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import image from '../images/noresults.jpg';

const CharacterList = (props) => {
  const handleButtonHome = (ev) => {
    props.handleButtonHome('');
    console.log(ev);
  };
  if (props.characters.length === 0) {
    return (
      <>
        {/* <Link to="/" className="btn-header" title="Go to search characters">
        START
      </Link> */}
        <div className="container-results">
          <img
            className="picture"
            src={image}
            alt="No results founded"
            title="No results founded"
          ></img>
        </div>
        <button className="btn-home" onChange={handleButtonHome}>
          Home
        </button>
      </>
    );
  }
  const html = props.characters.map((item) => (
    <li className="card" key={item.id}>
      <Link to={`/character-detail/${item.id}`} title="Character info">
        <div className="character">
          <CharacterCard
            id={item.id}
            picture={item.image}
            name={item.name}
            specie={item.species}
          />
        </div>
      </Link>
    </li>
  ));

  return (
    <>
      <ul className="list-container">{html}</ul>
    </>
  );
};

export default CharacterList;
