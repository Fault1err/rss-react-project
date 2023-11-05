import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailedCharacter } from '../interfaces/search-results-props';
import '../App.css';

const initialState: DetailedCharacter | null = null;

const CharPage: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<DetailedCharacter | null>(
    initialState
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching character details:', error);
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (!character) {
    return <div>Character not found.</div>;
  }

  return (
    <div className="char">
      {loading ? (
        <div className="loader-details">LOADING...</div>
      ) : (
        <>
          <img src={character.image} width="250px" alt="picture" />
          <p>Name: {character.name}</p>
          <p>Species: {character.species}</p>
          <p>Location: {character.location.name}</p>
        </>
      )}
    </div>
  );
};

export default CharPage;
