import { DetailedCharacter } from '../interfaces/search-results-props';

const fetchCharacter = async (id: string) => {
  try {
    const response: Response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data: DetailedCharacter = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching character details:', error);
    throw error;
  }
};

export default fetchCharacter;
