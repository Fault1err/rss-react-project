import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
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
  const charRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const closeDetails = useCallback((): void => {
    navigate('/', { replace: true });
  }, [navigate]);

  const clickOutside = useCallback(
    (event: React.MouseEvent): void => {
      if (event.target === event.currentTarget) {
        closeDetails();
      }
    },
    [closeDetails]
  );

  useEffect((): void => {
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

  return (
    <div className="char-background" onClick={clickOutside} role="presentation">
      <div ref={charRef} className="char">
        <button className="close-btn" onClick={closeDetails}>
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
    </div>
  );
};

export default CharPage;
