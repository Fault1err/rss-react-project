import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DetailedCharacter } from '../interfaces/search-results-props';
import fetchCharacter from '../utils/getCharacter';
import '../App.css';

const initialState: DetailedCharacter | null = null;

const CharPage: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<DetailedCharacter | null>(
    initialState
  );
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const refDetail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outsideClick = (event: MouseEvent): void => {
      if (
        refDetail.current &&
        !refDetail.current.contains(event.target as Node)
      ) {
        navigate('/', { replace: true });
      }
    };
    document.addEventListener('mousedown', outsideClick);
    return (): void => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, [navigate]);

  useEffect(() => {
    if (id) {
      const fetchCharData = async (): Promise<void> => {
        setLoading(true);
        try {
          const data: DetailedCharacter = await fetchCharacter(id);
          setCharacter(data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };

      fetchCharData();
    }
  }, [id]);

  if (!character) {
    return <div>Looking for a character, please wait...</div>;
  }

  const closeBtnClick = (): void => {
    navigate('/', { replace: true });
  };

  return (
    <div className="char" ref={refDetail}>
      <button className="close-btn" onClick={closeBtnClick}>
        X
      </button>
      {loading ? (
        <div className="loader-details">LOADING...</div>
      ) : (
        <>
          <h3>Character</h3>
          <img src={character.image} width="220px" alt="picture" />
          <p className="detail-text">Name: {character.name}</p>
          <p className="detail-text">Species: {character.species}</p>
          <p className="detail-text">Location: {character.location.name}</p>
        </>
      )}
    </div>
  );
};

export default CharPage;
